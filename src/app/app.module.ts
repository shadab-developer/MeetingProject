import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentsComponent } from './header/mycomponents/mycomponents.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { MeetingComponent } from './mycomponents/meeting/meeting.component';
import { StudentformComponent } from './mycomponents/studentform/studentform.component';
import {FormsModule , ReactiveFormsModule } from '@angular/forms'
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { StudentDataComponent } from './student-data/student-data.component'
@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent,
    HeaderComponent,
    MeetingComponent,
    StudentformComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
