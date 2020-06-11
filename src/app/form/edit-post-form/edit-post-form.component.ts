import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { PostService } from "../../Service/post.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { 
      journey,
      Positivity,
      UStory,
      Arts,
      Music,
      Travel,
      Volunteer,
      Work
 } from "../../Service/service";

@Component({
  selector: 'app-edit-post-form',
  templateUrl: './edit-post-form.component.html',
  styleUrls: ['./edit-post-form.component.scss']
})
export class EditPostFormComponent implements OnInit {
  editForm:FormGroup
  image:any;
  description:any;
  file = "";
  journey:journey[]
  story:UStory[]
  positive:Positivity[]
  arts:Arts[]
  music:Music[]
  travel:Travel[]
  volunteer:Volunteer[]
  work:Work[]
  journey2:journey
  story2:UStory
  positive2:Positivity
  arts2:Arts
  music2:Music
  travel2:Travel
  volunteer2:Volunteer
  work2:Work
  task: any;
  downloadURL: Observable<string>;
  URL: any;
  ID:any
  routes:any
  isEdit =true
  datas:any
  path:any
  Uid:any
  isShow = false
  postDescription:any
  postImages:any
  postID:any
  postURL:any
  uploadPercent: Observable<number>;


  constructor(private fb:FormBuilder, private route:ActivatedRoute, 
    private service:PostService, private storage: AngularFireStorage,
    private router:Router) { 
      this.createForm()
    }

  ngOnInit(): void {
    this.ID = this.route.snapshot.params['id']
    this.routes = this.router.url.split("/")
    this.path = this.routes[this.routes.length-1]
    console.log(this.path);
   if(this.path == 'journey'){
      this.service.getJourney().subscribe(res=>{
        res.forEach(el =>{
            this.journey2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'positivity'){
      this.service.getPositivity().subscribe(res=>{
        res.forEach(el =>{
            this.positive2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'stories'){
      this.service.getStories().subscribe(res=>{
        res.forEach(el =>{
            this.story2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'arts'){
      this.service.getArts().subscribe(res=>{
        res.forEach(el =>{
            this.arts2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'musics'){
      this.service.getMusic().subscribe(res=>{
        res.forEach(el =>{
            this.music2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }
    else if(this.path == 'travel'){
      this.service.getTravel().subscribe(res=>{
        res.forEach(el =>{
            this.travel2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'volunteerism'){
      this.service.getVolunteerism().subscribe(res=>{
        res.forEach(el =>{
            this.volunteer2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }else if(this.path == 'works'){
      this.service.getWorks().subscribe(res=>{
        res.forEach(el =>{
            this.work2 = el
            this.Uid = this.ID
            this.image = el.images
            this.description = el.description
            this.URL = el.images
            el.posts.forEach(data=>{
              if(data.id == this.ID){
                console.log(true);
                 
                console.log("datas",data.id);
                this.postID = this.ID
                this.postImages = data.images
                this.postURL = data.images
                this.postDescription = data.description
              }
              this.createForm()
            })
        })
      })
    }
    
  }

  createForm(){
    this.editForm = this.fb.group({
      id:[this.Uid || null,Validators.required ],
      images:[null, Validators.required],
      description:[this.description || null,Validators.required ],
      posts: this.fb.group({
        id:[this.postID, Validators.required],
        images:['', Validators.required],
        description:[this.postDescription, Validators.required]
      })
    })
  }

  onUploadOutput(event){
    this.isShow = true
    this.isEdit = false
    const filename =  event.target.files[0].name
    this.file = event.target.files[0]
    const filePath = "imageUploads/"+ filename
    const fileRef = this.storage.ref(filePath);
    this.task = fileRef.put(this.file);
    this.uploadPercent = this.task.percentageChanges();
    
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          fileRef.getDownloadURL().subscribe(res=>{
            this.isShow = false
            this.postURL = res
            // console.log(this.editForm.value.posts.images);
            this.editForm.value.posts.images = this.URL
            
          });
        })
      )
      .subscribe(() => {});
  }


  upload(data:any){
    const id = this.postID
    if(this.path == 'journey'){
      this.journey2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.journey2.posts[this.postID] = data.posts
          this.service.updateData(this.journey2, this.path)
          this.router.navigate(['/journey'])
        }
      })
    }else if(this.path == 'positivity'){
      this.positive2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.positive2.posts[this.postID] = data.posts
          this.service.updateData(this.positive2, this.path)
          this.router.navigate(['/positivity'])
        }
      })
    }else if(this.path == 'stories'){
      this.story2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.story2.posts[this.postID] = data.posts
          this.service.updateData(this.story2, this.path)
          this.router.navigate(['/stories'])
        }
      })
    }else if(this.path == 'arts'){
      this.arts2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.arts2.posts[this.postID] = data.posts
          this.service.updateData(this.arts2, this.path)
          this.router.navigate(['/arts'])
        }
      })
    }else if(this.path == 'work'){
      this.work2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.work2.posts[this.postID] = data.posts
          this.service.updateData(this.work2, this.path)
          this.router.navigate(['/works'])
        }
      })
    }else if(this.path == 'travel'){
      this.travel2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.travel2.posts[this.postID] = data.posts
          this.service.updateData(this.travel2, this.path)
          this.router.navigate(['/travel'])
        }
      })
    }else if(this.path == 'musics'){
      this.music2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.music2.posts[this.postID] = data.posts
          this.service.updateData(this.music2, this.path)
          this.router.navigate(['/musics'])
        }
      })
    }else if(this.path == 'volunteerism'){
      this.volunteer2.posts.forEach(element=>{
        if(element.id == this.postID){
          data.images = this.URL
          data.posts.images = this.postURL
          this.volunteer2.posts[this.postID] = data.posts
          this.service.updateData(this.volunteer2, this.path)
          this.router.navigate(['/volunteerism'])
        }
      })
    }
  }
}
