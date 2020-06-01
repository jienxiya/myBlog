import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
