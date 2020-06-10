import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TravelComponent } from './content/myworld/travel/travel.component';
import { AboutComponent } from './content/about/about.component';
import { JourneyComponent } from './content/blog/journey/journey.component';
import { PositivityComponent } from './content/blog/positivity/positivity.component';
import { UntoldStoryComponent } from './content/blog/untold-story/untold-story.component';
import { MusicComponent } from './content/myworld/music/music.component';
import { ArtComponent } from './content/myworld/art/art.component';
import { WorkComponent } from './content/myworld/work/work.component';
import { VolunteerismComponent } from './content/myworld/volunteerism/volunteerism.component';
import { PostFormComponent } from './post-form/post-form.component';
import { JourneyDetailsComponent } from './content/blog/journey-details/journey-details.component';
import { PositivityDetailsComponent } from './content/blog/positivity-details/positivity-details.component';
import { UStoryDetailsComponent } from './content/blog/u-story-details/u-story-details.component';
import { ArtDetailsComponent } from './content/myworld/art-details/art-details.component';
import { MusicDetailsComponent } from './content/myworld/music-details/music-details.component';
import { TravelDetailsComponent } from './content/myworld/travel-details/travel-details.component';
import { VolunteerDetailsComponent } from './content/myworld/volunteer-details/volunteer-details.component';
import { WorkDetailsComponent } from './content/myworld/work-details/work-details.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { DescriptionFormComponent } from './form/description-form/description-form.component';
import { AboutFormComponent } from './form/about-form/about-form.component';
import { EditFormComponent } from './form/edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    TravelComponent,
    AboutComponent,
    JourneyComponent,
    PositivityComponent,
    UntoldStoryComponent,
    MusicComponent,
    ArtComponent,
    WorkComponent,
    VolunteerismComponent,
    PostFormComponent,
    JourneyDetailsComponent,
    PositivityDetailsComponent,
    UStoryDetailsComponent,
    ArtDetailsComponent,
    MusicDetailsComponent,
    TravelDetailsComponent,
    VolunteerDetailsComponent,
    WorkDetailsComponent,
    AddPostFormComponent,
    DescriptionFormComponent,
    AboutFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireStorageModule

  ],
  providers: [AngularFirestore, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
