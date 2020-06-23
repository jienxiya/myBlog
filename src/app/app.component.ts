import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { UsersService } from "./Service/users.service"
import { AuthService } from "./Service/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'myBlog';
  routes:any
  path:any
  admin = false
  users:any;
  constructor(private route:ActivatedRoute, private router:Router, location: Location, public user:UsersService, public auth:AuthService){
    this.auth.user.subscribe(user=>this.users = user)
    router.events.subscribe(res=>{
      this.routes = location.path().split("/")
      this.path =  this.routes[this.routes.length-1]
      if(this.path == 'admin'){
        this.admin = true
      }else{
        this.admin = false
      }
      console.log(this.path);
      
    })
  }

  ngOnInit(){
    console.log(this.router.url);  
    
  }

  
}
