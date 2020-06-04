import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Service, PostsService } from "../Service/service";
import { PostService } from "../Service/post.service";
import { Subscription } from "rxjs";
import { journey, PostsJourney } from "../Service/service";
import 'jarallax';
declare var jarallax: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit,  AfterViewInit {
  getPostSubscription:Subscription;
  events:Service[];
  event:Service
  post:Service[]
  posts:Service
  postss = []
  showPost = true
  addQuotes = false
  // @Output() value = new EventEmitter
  // @Output() data = new EventEmitter

   constructor(private service:PostService) { }

   ngOnInit(): void {
    this.getPostSubscription = this.service.getProfile().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);
      if(res.length !== 0){
        this.addQuotes = true
      }else{
        this.addQuotes = false
      }
      res.map(result=>{
        this.posts = result
        this.postss = result.posts
      })
    })
  } 

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }

  upload(service:Service){
    this.service.addProfile(service)
    console.log(service);  
}

AddQuotes(service:PostsService){
  console.log("the postas",this.posts);
  this.posts.posts.push(service)
  this.service.updateProfile(this.posts)
}

}
