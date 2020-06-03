import { Component, OnInit } from '@angular/core';
import { Music, PostsMusic } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {
  showPost = true
  post:Music[]
  posts:Music
  postss = []

  constructor(private service:PostService) { }

  ngOnInit() {
  }

  getValue(data:any){
    this.posts = data
    console.log("data", this.posts);
    this.postss = data.posts
    console.log("posts", this.postss);
    this.showPost = false
  }

  upload(music:PostsMusic){
    console.log("the postas",this.posts);
    this.posts.posts.push(music)
    this.service.updateMusic(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }

}
