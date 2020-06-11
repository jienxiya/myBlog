import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { PostService } from "../../Service/post.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editForm:FormGroup
  image:any;
  description:any;
  file = "";
  task: any;
  downloadURL: Observable<string>;
  URL: any;
  ID:number
  isEdit =true
  datas:any
  path:string
  Uid:any
  isShow = false
  uploadPercent: Observable<number>;
  image2:any
  description2:any

  constructor( private fb:FormBuilder, private route:ActivatedRoute, 
    private service:PostService, private storage: AngularFireStorage,
    private router:Router) { 
      this.createForm()
   }
   

  ngOnInit(): void {
    this.ID = this.route.snapshot.params['id']
    this.path = this.route.snapshot.params['path']
    if(this.path === 'journey'){
      console.log(this.path);
      this.service.getJourney().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
              this.Uid = data.id
              this.image = data.images
              this.description = data.description
              this.URL = data.images
              this.datas = data.posts
              console.log(data.posts);
              
              }
              this.createForm()
        })
        
      })
    }
    else if(this.path === 'positivity'){
      this.service.getPositivity().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    } else if(this.path === 'stories'){
      this.service.getStories().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    }else if(this.path === 'arts'){
      this.service.getArts().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    }
    else if(this.path === 'travel'){
      this.service.getTravel().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    }else if(this.path === 'musics'){
      this.service.getMusic().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    }else if(this.path === 'works'){
      this.service.getWorks().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
              this.URL = data.images
              this.datas = data.posts
          }
          this.createForm()
        })
      })
    }
    else if(this.path === 'volunteerism'){
      this.service.getVolunteerism().subscribe(res=>{
        res.forEach(data=>{
          if(data.id == this.ID){
            this.Uid = data.id
            this.image = data.images
            this.description = data.description
            this.datas = data.posts
            this.URL = data.images
          }
          this.createForm()
        })
      })
    }                   
    
  }

  upload(data:any){
    data.images = this.URL
    data.id = this.Uid
    data.posts = this.datas
    this.service.updateData(data, this.path)
    if(this.path == 'journey'){
      this.router.navigate(['/journey'])
    }else if(this.path == 'positivity'){
      this.router.navigate(['/positivity'])
    }else if(this.path == 'stories'){
      this.router.navigate(['/stories'])
    }else if(this.path == 'arts'){
      this.router.navigate(['/arts'])
    }else if(this.path == 'musics'){
      this.router.navigate(['/musics'])
    }else if(this.path == 'travel'){
      this.router.navigate(['/travel'])
    }else if(this.path == 'works'){
      this.router.navigate(['/works'])
    }else if(this.path == 'volunteerism'){
      this.router.navigate(['/volunteerism'])
    }
    
    
  }

  createForm(){
    this.editForm = this.fb.group({
      id:[this.Uid || null,Validators.required ],
      images:[null, Validators.required],
      description:[this.description || null,Validators.required ],
      posts: new FormControl([])
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
    // this.downloadURL = fileRef.getDownloadURL()
    // console.log(this.downloadURL);
    
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          fileRef.getDownloadURL().subscribe(res=>{
            this.isShow = false
            this.URL = res
            this.editForm.value.images = this.URL
            
          });
        })
      )
      .subscribe(() => {});
  }

}
