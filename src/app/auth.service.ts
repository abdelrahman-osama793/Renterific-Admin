import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { Observable,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);
  
  constructor(private _HttpClient:HttpClient, private _Router:Router) { 
    if(localStorage.getItem('userToken') !=null){
      this.saveCurrentUser();

    }
  }

  saveCurrentUser()
  {
    let token:any=localStorage.getItem('userToken'); 
    this.currentUser.next(jwtDecode(token));
    console.log(this.currentUser);
  } 


  login(formData:any):Observable<any>{
    return this._HttpClient.post('http://localhost:3333/api/user/login',formData);
  }


  logout(){
    this.currentUser.next(null);
    localStorage.clear()
    this._Router.navigate(['/']);

  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }