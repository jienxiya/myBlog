import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostsJourney, journey } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";
import { Subscription } from "rxjs";
import { UsersService } from "../../../Service/users.service";
import { AuthService } from "../../../Service/auth.service";




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
    users:any;
    @Output() value = new EventEmitter
    @Output() data = new EventEmitter
    
  constructor(private service:PostService, public user: UsersService, private auth:AuthService ) {
    this.auth.user.subscribe(user=>this.users = user)
   }

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

  delete(data:journey){
      console.log(data);
      if(confirm("Are you sure you want delete this post? This post will not Be recovered")){
        this.service.deleteJourneyData(data)
      }else{
        prompt("Delete is Cancelled")
      }  
  }

  update(data:number){
    alert(data)
    
  }

}
