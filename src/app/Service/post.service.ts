import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { 
  journey,
  PostsJourney, 
  UStory, 
  Positivity, 
  Arts,
  Music,
  Travel,
  Volunteer,
  Work,
  Service,
  About 
} from "../Service/service";
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Initializing data 

  post:journey
  posts:Observable<journey[]>
  private postDoc:AngularFirestoreDocument<journey>
  private postCollection: AngularFirestoreCollection<journey>

  story:UStory
  stories:Observable<UStory[]>
  private storyDoc:AngularFirestoreDocument<UStory>
  private storyCollection: AngularFirestoreCollection<UStory>

  positive:Positivity
  positives:Observable<Positivity[]>
  private positiveDoc:AngularFirestoreDocument<Positivity>
  private positiveCollection: AngularFirestoreCollection<Positivity>

  art:Arts
  arts:Observable<Arts[]>
  private artsDoc:AngularFirestoreDocument<Arts>
  private artsCollection: AngularFirestoreCollection<Arts>

  music:Music
  musics:Observable<Music[]>
  private musicDoc:AngularFirestoreDocument<Music>
  private musicCollection: AngularFirestoreCollection<Music>

  travel:Travel
  travels:Observable<Travel[]>
  private travelDoc:AngularFirestoreDocument<Travel>
  private travelCollection: AngularFirestoreCollection<Travel>

  volunteer:Volunteer
  volunteers:Observable<Volunteer[]>
  private volunteerDoc:AngularFirestoreDocument<Volunteer>
  private volunteerCollection: AngularFirestoreCollection<Volunteer>

  work:Work
  works:Observable<Work[]>
  private workDoc:AngularFirestoreDocument<Work>
  private workCollection: AngularFirestoreCollection<Work>

  service:Service
  services:Observable<Service[]>
  private serviceDoc:AngularFirestoreDocument<Service>
  private serviceCollection: AngularFirestoreCollection<Service>

  about:About
  abouts:Observable<About[]>
  private aboutDoc:AngularFirestoreDocument<About>
  private aboutCollection: AngularFirestoreCollection<About>

// ===============

// Connecting to Firebase

  constructor(public db: AngularFirestore) { 
      this.postCollection = db.collection<journey>('posts', ref=>ref.orderBy('id', 'asc'));
      this.posts = this.postCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as journey
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.storyCollection = db.collection<UStory>('stories', ref=>ref.orderBy('id', 'asc'));
      this.stories = this.storyCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as UStory
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.positiveCollection= db.collection<Positivity>('positivities', ref=>ref.orderBy('id', 'asc'));
      this.positives = this.positiveCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Positivity
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.artsCollection = db.collection<Arts>('arts', ref=>ref.orderBy('id', 'asc'));
      this.arts = this.artsCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Arts
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.musicCollection = db.collection<Music>('music', ref=>ref.orderBy('id', 'asc'));
      this.musics = this.musicCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Music
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.travelCollection = db.collection<Travel>('travel', ref=>ref.orderBy('id', 'asc'));
      this.travels = this.travelCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Travel
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.volunteerCollection = db.collection<Volunteer>('volunteerism', ref=>ref.orderBy('id', 'asc'));
      this.volunteers = this.volunteerCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Volunteer
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.workCollection = db.collection<Work>('works', ref=>ref.orderBy('id', 'asc'));
      this.works = this.workCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Work
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.serviceCollection = db.collection<Service>('profile', ref=>ref.orderBy('id', 'asc'));
      this.services = this.serviceCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as Service
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )

      this.aboutCollection = db.collection<About>('about', ref=>ref.orderBy('id', 'asc'));
      this.abouts = this.aboutCollection.snapshotChanges().pipe(
        map(action=>action.map(a=>{
          const data = a.payload.doc.data() as About
          const id = a.payload.doc.id
          return {id, ...data}
        }))
      )
  }
  // =====================================================

  // Add Data to Firebase

  addJourney(journey:journey){
    this.postCollection.ref.get().then(res=>{
      journey.id = res.size
      return this.postCollection.add(journey)
    })
  }

  addPositivity(positivity:Positivity){
    this.positiveCollection.ref.get().then(res=>{
      positivity.id = res.size
      return this.positiveCollection.add(positivity)
    })
  }

  addStory(story:UStory){
    this.storyCollection.ref.get().then(res=>{
      story.id = res.size
      return this.storyCollection.add(story)
    })
  }

  addArts(arts:Arts){
    this.artsCollection.ref.get().then(res=>{
      arts.id = res.size
      return this.artsCollection.add(arts)
    })
  }

  addMusic(music:Music){
    this.musicCollection.ref.get().then(res=>{
      music.id = res.size
      return this.musicCollection.add(music)
    })
  }

  addTravel(travel:Travel){
    this.travelCollection.ref.get().then(res=>{
      travel.id = res.size
      return this.travelCollection.add(travel)
    })
  }

  addVolunteerism(volunteer:Volunteer){
    this.volunteerCollection.ref.get().then(res=>{
      volunteer.id = res.size
      return this.volunteerCollection.add(volunteer)
    })
  }

  addWork(work:Work){
    this.workCollection.ref.get().then(res=>{
      work.id = res.size
      return this.workCollection.add(work)
    })
  }

  addProfile(service:Service){
    this.serviceCollection.ref.get().then(res=>{
      service.id = res.size
      return this.serviceCollection.add(service)
    })
  }

  addAbout(about:About){
    this.aboutCollection.ref.get().then(res=>{
      about.id = res.size
      return this.aboutCollection.add(about)
    })
  }

// ==================================================

// Getting data from firebase

  getJourney(){
    return this.posts
  }
  getStories(){
    return this.stories
  }
  getPositivity(){
    return this.positives
  }
  getArts(){
    return this.arts
  }
  getMusic(){
    return this.musics
  }
  getTravel(){
    return this.travels
  }
  getVolunteerism(){
    return this.volunteers
  }
  getWorks(){
    return this.works
  }

  getProfile(){
    return this.services
  }

  getMyAbouts(){
    return this.abouts
  }
 
// =========================================================

// Updating data from firebase

  updateJourney(journey:journey){
    this.postCollection.ref.where('id', '==', journey.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.postDoc = this.db.doc<journey>('posts/' + doc.id)
          this.postDoc.update(journey)
        });
      })
  }

  updateStory(story:UStory){
    this.storyCollection.ref.where('id', '==', story.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.storyDoc = this.db.doc<UStory>('stories/' + doc.id)
          this.storyDoc.update(story)
        });
      })
  }
  
  updatePositivity(positive:Positivity){
    this.positiveCollection.ref.where('id', '==', positive.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.positiveDoc = this.db.doc<journey>('positivities/' + doc.id)
          this.positiveDoc.update(positive)
        });
      })
  }
  
  updateArt(art:Arts){
    this.artsCollection.ref.where('id', '==', art.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.artsDoc = this.db.doc<Arts>('arts/' + doc.id)
          this.artsDoc.update(art)
        });
      })
  }
  
  updateMusic(music:Music){
    this.musicCollection.ref.where('id', '==', music.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.musicDoc = this.db.doc<Music>('music/' + doc.id)
          this.musicDoc.update(music)
        });
      })
  }
  
  updateTravel(travel:Travel){
    this.travelCollection.ref.where('id', '==', travel.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.travelDoc = this.db.doc<Travel>('travel/' + doc.id)
          this.travelDoc.update(travel)
        });
      })
  }
  
  
  updateVolunteerism(volunteer:Volunteer){
    this.volunteerCollection.ref.where('id', '==', volunteer.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.volunteerDoc = this.db.doc<Volunteer>('volunteerism/' + doc.id)
          this.volunteerDoc.update(volunteer)
        });
      })
  }
  
  updateWork(work:Work){
    this.workCollection.ref.where('id', '==', work.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.workDoc = this.db.doc<Work>('works/' + doc.id)
          this.workDoc.update(work)
        });
      })
  }

  updateProfile(service:Service){
    this.serviceCollection.ref.where('id', '==', service.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.serviceDoc = this.db.doc<Service>('profile/' + doc.id)
          this.serviceDoc.update(service)
        });
      })
  }

  updateAbout(about:About){
    this.aboutCollection.ref.where('id', '==', about.id).get()
      .then(res=>{
        res.forEach(doc => {
          this.aboutDoc = this.db.doc<About>('about/' + doc.id)
          this.aboutDoc.update(about)
        });
      })
  }
  
  
  // =====================================================================
}

