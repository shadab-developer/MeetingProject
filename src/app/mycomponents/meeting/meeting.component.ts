import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  meetingObject: any = [
    {
      studentName: 'Shadab',
      Section: 'A',
      Degree: 'BCA',
      datetime: '12/23/2000',
    },
    {
      studentName: 'Keshav',
      Section: 'A',
      Degree: 'MCA',
      datetime: '12/23/2000',
    },
    {
      studentName: 'Abhishek',
      Section: 'A',
      Degree: 'DTA',
      datetime: '12/23/2000',
    },
  ];
}
