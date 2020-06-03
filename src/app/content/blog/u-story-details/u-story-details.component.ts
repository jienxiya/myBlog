import { Component, OnInit } from '@angular/core';
import { UStory, PostsUStory } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-u-story-details',
  templateUrl: './u-story-details.component.html',
  styleUrls: ['./u-story-details.component.scss']
})
export class UStoryDetailsComponent implements OnInit {

  showPost = true
  post:UStory[]
  posts:UStory
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

  upload(story:PostsUStory){
    console.log("the postas",this.posts);
    this.posts.posts.push(story)
    this.service.updateStory(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }
}
