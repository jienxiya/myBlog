import { Component, OnInit } from '@angular/core';
import { Work, PostsWork } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  showPost = true
  post:Work[]
  posts:Work
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

  upload(work:PostsWork){
    console.log("the postas",this.posts);
    this.posts.posts.push(work)
    this.service.updateWork(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }
  delete(data:PostsWork){
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
