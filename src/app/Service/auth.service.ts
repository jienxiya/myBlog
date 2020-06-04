import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject } from 'rxjs';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor( public afAuth: AngularFireAuth,) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        this.loggedIn.next(true);
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error)
    })
  }

  async logout(){
    await this.afAuth.auth.signOut()

  }
}
