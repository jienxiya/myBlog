import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";

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
  constructor(private route:ActivatedRoute, private router:Router){
   
    // this.routes = this.route.snapshot.params['admin']
    // console.log(this.routes)
    // if(this.path == 'admin'){
    //   this.admin = true
    // }else{
    //   this.admin = false
    // }
  }

  ngOnInit(){
    this.router.events.subscribe(res=>{
      this.routes = this.route.snapshot.params['admin']
      this.path = res
      console.log(this.path);  
    })
    
  }

  
}
