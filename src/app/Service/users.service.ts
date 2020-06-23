import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { User } from "./user";
import * as _ from "lodash";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userRoles:Array<string>

  constructor(private auth:AuthService, private fire: AngularFirestore) { 
    auth.user.forEach(el =>{
      return this.userRoles = _.keys(_.get(el, 'roles'))
    })
  }

  // private matchingRole(allowedRoles): boolean {
  //   return !_.empty(_.intersection(allowedRoles, this.userRoles))
  // }
  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }

  // canDelete(user: User): boolean {
  //   const allowed = ['admin']
  //   return this.checkAuthorization(user, allowed)
  // }


  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }
}
