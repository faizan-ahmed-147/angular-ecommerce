import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { signUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http:HttpClient, private router:Router) { }
  userSignUp(data:signUp){
    this.http.post('/api/v1/register',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['login'])
      }
    })
  } 

}
