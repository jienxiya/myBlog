import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomepageComponent } from "./homepage/homepage.component";

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'admin', component:LoginComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
