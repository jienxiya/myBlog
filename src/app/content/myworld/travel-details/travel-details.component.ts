import { Component, OnInit } from '@angular/core';
import { Travel, PostsTravel } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.scss']
})
export class TravelDetailsComponent implements OnInit {
  showPost = true
  post:Travel[]
  posts:Travel
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

  upload(travel:PostsTravel){
    console.log("the postas",this.posts);
    travel.id = this.posts.posts.length
    this.posts.posts.push(travel)
    this.service.updateTravel(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }
  delete(data:PostsTravel){
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
