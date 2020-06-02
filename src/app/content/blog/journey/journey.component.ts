import { Component, OnInit } from '@angular/core';
import { PostsJourney, journey } from "../../../Service/service";
import { PostService } from "../../../Service/post.service";

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor(private service:PostService) { }

  ngOnInit(): void {
  }

  upload(journey:journey){
      this.service.addJourney(journey)
      console.log(journey);
      
  }
}
