import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,FormsModule,FormBuilder,Validators } from '@angular/forms';
import { SFMS } from './studentgetdata';
import { ServiceService} from '../../service.service'
import { HttpClient,HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
 
   

  constructor(private formBuilder:FormBuilder , http: HttpClient,private api:ServiceService , sfms : SFMS) { 
    
  }
  formValue !: FormGroup;
  studentDash: SFMS = new SFMS();
  studentAll:any;
  ngOnInit(): void {


    // style binding
    const red = "green"


    }
  
    form =  new FormGroup({
      Stdname : new FormControl('', [Validators.required, Validators.maxLength(20)]),
      Section : new FormControl('', Validators.required),
      degree : new FormControl('', Validators.required),
      dateTime :new FormControl('', Validators.required)
    })
    get Stdname() {
      return this.form.get('Stdname')
    }
    get Section() {
     return this.form.get('Section')
   }
   get degree() {
     return this.form.get('degree')
   }
   get dateTime() {
     return this.form.get('dateTime')
   }
    submit(){
      console.log(this.form.value)
    } 

   
}
