import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './mycomponents/header/header.component';
import { MeetingComponent } from './mycomponents/meeting/meeting.component';
import { StudentformComponent } from './mycomponents/studentform/studentform.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
  {
    path : '',
    component : HeaderComponent
  },
  {
    path : 'studentData',
    component : StudentDataComponent
  },
  {
    path : 'meeting',
    component : MeetingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
