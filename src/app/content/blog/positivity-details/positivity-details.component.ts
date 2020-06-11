import { Component, OnInit } from '@angular/core';
import { Positivity, PostsPositvity } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-positivity-details',
  templateUrl: './positivity-details.component.html',
  styleUrls: ['./positivity-details.component.scss']
})
export class PositivityDetailsComponent implements OnInit {
  showPost = true
  post:Positivity[]
  posts:Positivity
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

  upload(positivity:PostsPositvity){
    console.log("the postas",this.posts);
    positivity.id = this.posts.posts.length
    this.posts.posts.push(positivity)
    this.service.updatePositivity(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }

  delete(data:PostsPositvity){
    const index = this.posts.posts.indexOf(data)
    console.log(index);
    if(confirm("are you sure you want to Delete this Post")){
      this.posts.posts.splice(index)
      this.service.updateJourney(this.posts)
    }else{
      alert("Delete is cancelled")
    }
    
  }



}
