import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Volunteer } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";

@Component({
  selector: 'app-volunteerism',
  templateUrl: './volunteerism.component.html',
  styleUrls: ['./volunteerism.component.scss']
})
export class VolunteerismComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Volunteer[];
  event:Volunteer
  showPost = true
  users:any;
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService,public user: UsersService, private auth:AuthService) { 
    this.auth.user.subscribe(user=>this.users = user) }


  ngOnInit(): void {
    this.getStorySubscription = this.service.getVolunteerism().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(volunteer:Volunteer){
    this.service.addVolunteerism(volunteer)
    console.log(volunteer);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:Volunteer){
    console.log(data);
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.service.deleteVolunteerData(data)
    }else{
      prompt("Delete is Cancelled")
    }  
}

edit(data:Volunteer){
  console.log(data);
  
}

}
