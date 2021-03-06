import { Component, OnInit } from '@angular/core';
import { AuthService } from "../Service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  GoogleSignIn(){
      this.auth.googleSignin().then(res=>{
        console.log(res);
        
      }).catch(e=>{
        alert(e.message = "Network Error Please Refresh ANd Try Again")
      })
    }
    

}
