import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsJourney, journey } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {
    getPostSubscription:Subscription;
    events:journey[];
    event:journey
    showPost = true
    @Output() value = new EventEmitter
    @Output() data = new EventEmitter
  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getPostSubscription = this.service.getJourney().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);
      
    })
  } 

  upload(journey:journey){
      this.service.addJourney(journey)
      console.log(journey);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data)
    
    
  }

  // getValue(data:number){
  //   this.events.map(res=>{
  //     if(res.id === data){
  //       this.event = res
  //     }
  //   })
  // }

}
