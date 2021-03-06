import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Arts } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Arts[];
  event:Arts
  showPost = true
  users:any;
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService,public user: UsersService, private auth:AuthService) { 
    this.auth.user.subscribe(user=>this.users = user) }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getArts().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(arts:Arts){
    this.service.addArts(arts)
    console.log(arts);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:Arts){
    console.log(data);
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.service.deleteArtsData(data)
    }else{
      prompt("Delete is Cancelled")
    }  
}

edit(data:Arts){
  console.log(data);
  
}

}
