import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Music } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";

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
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService) { }

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


}
