import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"home", component:HomeComponent, canActivate:[AuthGuard]},

];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
