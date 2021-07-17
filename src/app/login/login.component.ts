import { Component, OnInit } from '@angular/core';
import  {AuthService} from '../auth.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) {

   }
   error:string ='';

  ngOnInit(): void {
  }
  // validation
  loginForm=new FormGroup({ 
    Email:new FormControl(null,[Validators.required,Validators.email]),
    Password:new FormControl(null,[Validators.required]),
   })
   // method for log in
  submitLoginForm(loginForm:FormGroup){
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if(response.message == "success" && response.data.Role_name=="admin"){
        localStorage.setItem('email',response.data.Email)
        localStorage.setItem('id',response.data._id)
        localStorage.setItem('password',response.data.Password)
        localStorage.setItem('phone',response.data.Phone)
        localStorage.setItem('name',response.data.Name)
        localStorage.setItem('street',response.data.Address_street)
        localStorage.setItem('city',response.data.Address_city)
        localStorage.setItem('Role_name',response.data.Role_name)
        localStorage.setItem('userToken',response.token); 
        console.log(response);
        
        this._AuthService.saveCurrentUser(); 
        this._Router.navigate(['/dash' ]) 
  
      }
      else{
        this.error=response.message
      }
    })
   }


}
