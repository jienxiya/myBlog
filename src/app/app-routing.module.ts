import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { TravelComponent } from "./content/travel/travel.component";
import { SelfiesComponent } from "./content/selfies/selfies.component";
import { CookingComponent } from "./content/cooking/cooking.component";
import { AboutComponent } from "./content/about/about.component";


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'about', component:AboutComponent},
  {path:'travel', component:TravelComponent},
  {path:'selfies', component:SelfiesComponent},
  {path:'cooking', component:CookingComponent},
  {path:'admin', component:LoginComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
