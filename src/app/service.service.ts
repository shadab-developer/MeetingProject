import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  PostStudent(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
      return res
    }))

 }
 getStudent(data:any){
   return this.http.get<any>('http://localhost:3000/posts',data).pipe(map((res:any)=>{
     return res
   }))
       
}
}
