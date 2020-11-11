import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageformComponent } from './messageform/messageform.component';

const routes: Routes = [{path:"",redirectTo:"message",pathMatch:"full"},
{path:"message",component:MessageformComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
