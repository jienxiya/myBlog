import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UStory } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";

@Component({
  selector: 'app-untold-story',
  templateUrl: './untold-story.component.html',
  styleUrls: ['./untold-story.component.scss']
})
export class UntoldStoryComponent implements OnInit {
  getStorySubscription:Subscription;
  events:UStory[];
  event:UStory
  showPost = true
  users:any;
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService,public user: UsersService, private auth:AuthService) { 
    this.auth.user.subscribe(user=>this.users = user)
  }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getStories().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(story:UStory){
    this.service.addStory(story)
    console.log(story);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:UStory){
    console.log(data);
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.service.deleteStoryData(data)
    }else{
      prompt("Delete is Cancelled")
    }  
}

edit(data:UStory){
  console.log(data);
  
}


}
