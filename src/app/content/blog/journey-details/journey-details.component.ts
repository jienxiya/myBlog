import { Component, OnInit, Input } from '@angular/core';
import { journey, PostsJourney } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.scss']
})
export class JourneyDetailsComponent implements OnInit {
  showPost = true
  post:journey[]
  posts:journey
  title:any
  postss = []
  constructor(private service:PostService) { }

  ngOnInit() {
    
  }

  getValue(data:any){
    this.posts = data
    console.log("data", this.posts);
    this.postss = data.posts
    // this.postss.forEach(element => {
    //    console.log("el ", element);
    // });
    // this.title = data.posts.title
    console.log("posts", this.postss);
    
    this.showPost = false
  }

  upload(journey:PostsJourney){
    console.log("the postas",this.posts);
    journey.id = this.posts.posts.length
    this.posts.posts.push(journey)
    this.service.updateJourney(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }
  delete(journey:PostsJourney){
    const index = this.posts.posts.indexOf(journey)
    console.log(index);
    if(confirm("are you sure you want to Delete this Post")){
      this.posts.posts.splice(index)
      this.service.updateJourney(this.posts)
    }else{
      alert("Delete is cancelled")
    }
    
  }


}
