import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { Work } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Work[];
  event:Work
  showPost = true
  users:any;
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService,public user: UsersService, private auth:AuthService) { 
    this.auth.user.subscribe(user=>this.users = user) }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getWorks().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(work:Work){
    this.service.addWork(work)
    console.log(work);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:Work){
    console.log(data);
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.service.deleteWorkData(data)
    }else{
      alert("Delete is Cancelled")
    }  
}

edit(data:Work){
  console.log(data);
  
}

}
