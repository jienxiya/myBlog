import { Component, OnInit, Output, EventEmitter   } from '@angular/core';
import { Work } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Work[];
  event:Work
  showPost = true
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getWorks().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(work:Work){
    this.service.addWork(work)
    console.log(work);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

}
