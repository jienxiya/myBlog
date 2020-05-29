import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { TravelComponent } from "./content/myworld/travel/travel.component"
import { AboutComponent } from "./content/about/about.component";
import { ArtComponent } from "./content/myworld/art/art.component"
import { MusicComponent } from "./content/myworld/music/music.component"
import { VolunteerismComponent } from "./content/myworld/volunteerism/volunteerism.component"
import { WorkComponent } from "./content/myworld/work/work.component"
import { JourneyComponent } from "./content/blog/journey/journey.component"
import { PositivityComponent } from "./content/blog/positivity/positivity.component"
import { UntoldStoryComponent } from "./content/blog/untold-story/untold-story.component"






const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'travel', component:TravelComponent},
  {path:'arts', component:ArtComponent},
  {path:'musics', component:MusicComponent},
  {path:'volunteerism', component:VolunteerismComponent},
  {path:'works', component:WorkComponent},
  {path:'journey', component:JourneyComponent},
  {path:'positivity', component:PositivityComponent},
  {path:'stories', component:UntoldStoryComponent},
  {path:'admin', component:LoginComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
