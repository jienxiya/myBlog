import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Arts } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {
  getStorySubscription:Subscription;
  events:Arts[];
  event:Arts
  showPost = true
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter

  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getStorySubscription = this.service.getArts().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(arts:Arts){
    this.service.addArts(arts)
    console.log(arts);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

}
