import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Travel } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Travel[];
  event:Travel
  showPost = true
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getTravel().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(travel:Travel){
    this.service.addTravel(travel)
    console.log(travel);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

}
