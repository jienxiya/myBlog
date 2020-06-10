import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { TravelDetailsComponent } from "./content/myworld/travel-details/travel-details.component"
import { AboutComponent } from "./content/about/about.component";
import { ArtDetailsComponent } from "./content/myworld/art-details/art-details.component"
import { MusicDetailsComponent } from "./content/myworld/music-details/music-details.component"
import { VolunteerDetailsComponent } from "./content/myworld/volunteer-details/volunteer-details.component"
import { WorkDetailsComponent } from "./content/myworld/work-details/work-details.component"
import { JourneyDetailsComponent } from "./content/blog/journey-details/journey-details.component"
import { PositivityDetailsComponent } from "./content/blog/positivity-details/positivity-details.component"
import { UStoryDetailsComponent } from "./content/blog/u-story-details/u-story-details.component"
import { EditFormComponent } from "./form/edit-form/edit-form.component";
import { EditPostFormComponent } from "./form/edit-post-form/edit-post-form.component";






const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'travel', component:TravelDetailsComponent},
  {path:'arts', component:ArtDetailsComponent},
  {path:'musics', component:MusicDetailsComponent},
  {path:'volunteerism', component:VolunteerDetailsComponent},
  {path:'works', component:WorkDetailsComponent},
  {path:'journey', component:JourneyDetailsComponent},
  {path:'positivity', component:PositivityDetailsComponent},
  {path:'stories', component:UStoryDetailsComponent},
  {path:'admin', component:LoginComponent},
  {path:'edit/:id/:path', component:EditFormComponent},
  {path:'edit-details/:id/:path', component:EditPostFormComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
