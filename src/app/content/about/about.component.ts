import { Component, OnInit, AfterViewInit } from '@angular/core';
import { About, AboutPosts } from "../../Service/service";
import { PostService } from "../../Service/post.service";
import { Subscription } from "rxjs";
import { journey, PostsJourney } from "../../Service/service";
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  getPostSubscription:Subscription;
  events:About[];
  event:About
  post:About[]
  posts:About
  postss = []
  showPost = true
  isSubmit = false


  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getPostSubscription = this.service.getMyAbouts().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);
      if(res.length === 0){
        this.isSubmit = false
        alert(res.length)
      }else{
        this.isSubmit = true
      }
      res.map(result=>{
        this.posts = result
        this.postss = result.posts
      })
    })
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2,
    });
  }

  upload(about:About){
    this.service.addAbout(about)
    console.log(about);  
  }

  addDetails(about:AboutPosts){
    console.log("the postas",this.posts);
    this.posts.posts.push(about)
    this.service.updateAbout(this.posts)
  }

}
