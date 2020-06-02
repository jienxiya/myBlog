import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { PostService } from "../Service/post.service";


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm:FormGroup
  image = "";
  file = "";
  task: any;
  downloadURL: Observable<string>;
  URL: any;
  @Output() post = new EventEmitter;
  
  constructor(
    private fb:FormBuilder,
    private storage: AngularFireStorage,
    private service:PostService
  ) { }

  ngOnInit(): void {
      this.postForm = this.fb.group({
        images:["", Validators.required],
        description:["",Validators.required ],
        posts:new FormControl([]),
      })
  }

  onUploadOutput(event){
    const filename =  event.target.files[0].name
    this.file = event.target.files[0]
    const filePath = "imageUploads/"+ filename
    const fileRef = this.storage.ref(filePath);
    this.task = fileRef.put(this.file);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL()
          fileRef.getDownloadURL().subscribe(res=>{
            console.log(res);
            this.URL = res
            this.postForm.value.images = this.URL
          });
        })
      )
      .subscribe(() => {});
  }

  upload(value){
    this.post.emit(value)
  }




}
