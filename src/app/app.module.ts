import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MessageComponent } from './message/message.component';
import { MessageformComponent } from './messageform/messageform.component';
import { FormsModule } from '@angular/forms';
// import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { AbouthospitalComponent } from './abouthospital/abouthospital.component';
import { HttpClientModule } from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    AppComponent,
    MessageformComponent,
    // DoctorslistComponent,
    AbouthospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2TelInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
