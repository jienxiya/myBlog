import { Component, OnInit } from '@angular/core';
import { Volunteer, PostsVolunteer } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {
  showPost = true
  post:Volunteer[]
  posts:Volunteer
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

  upload(volunteer:PostsVolunteer){
    console.log("the postas",this.posts);
    this.posts.posts.push(volunteer)
    this.service.updateVolunteerism(this.posts)
    // this.post.map(res=>{
    //   if(res.id === this.posts.id){
    //     res.posts.push(journey)
    //     this.service.updateJourney(res)
    //   }
    // })
  }


}
