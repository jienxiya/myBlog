import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { journey, PostsJourney} from "../Service/service";
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  post:journey
  posts:Observable<journey[]>
  private postDoc:AngularFirestoreDocument<journey>
  private postCollection: AngularFirestoreCollection<journey>

  constructor(public db: AngularFirestore) { 
      this.postCollection = db.collection<journey>('posts', ref=>ref.orderBy('id', 'asc'));
      this.posts = this.postCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as journey
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )
  }

  addJourney(journey:journey){
    this.postCollection.ref.get().then(res=>{
      journey.id = res.size
      return this.postCollection.add(journey)
    })
  }

  getJourney(){
    return this.posts
  }

  updateJourney(journey:journey){
    this.postCollection.ref.where('id', '==', journey.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.postDoc = this.db.doc<journey>('posts/' + doc.id)
          this.postDoc.update(journey)
        });
      })
  }
}
