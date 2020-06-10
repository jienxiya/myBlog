import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Positivity } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-positivity',
  templateUrl: './positivity.component.html',
  styleUrls: ['./positivity.component.scss']
})
export class PositivityComponent implements OnInit {
  getPositiveSubscription:Subscription;
  events:Positivity[];
  event:Positivity
  showPost = true
  @Output() value = new EventEmitter
  @Output() data = new EventEmitter


  constructor(private service:PostService) { }

  ngOnInit(): void {
    this.getPositiveSubscription = this.service.getPositivity().subscribe(res=>{
      this.events = res
      console.log("getting post", this.events);

    })
  }

  upload(positive:Positivity){
    this.service.addPositivity(positive)
    console.log(positive);  
  }

  showPosts(data:any){
    this.showPost = false
    this.value.emit(data) 
  }

  delete(data:Positivity){
    
    if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
      this.events.splice(data.id)
      this.service.deletePositivityData(data)
      console.log(data);
    }else{
      alert("Delete is Cancelled")
    }  
}

edit(data:Positivity){
  console.log(data);
  
}

}
