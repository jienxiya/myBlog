import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Music } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Music[];
  event:Music
  showPost = true
  users:any;
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService,public user: UsersService, private auth:AuthService) { 
    this.auth.user.subscribe(user=>this.users = user) }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getMusic().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(music:Music){
    this.service.addMusic(music)
    console.log(music);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:Music){
    console.log(data);
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.service.deleteMusicData(data)
    }else{
      alert("Delete is Cancelled")
    }  
}

edit(data:Music){
  console.log(data);
  
}


}
