import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
user:any;
  constructor(private myuserservice:AuthService,private myroute:Router) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  async getAllUser(){
     this.user=[];
    await this.myuserservice.getAllUser().subscribe((res:any)=>{
      for (const item of res) {
        if(item.Role_name=="user"){
          this.user.push(item);
        }
      }

    },(err)=>{console.log(err)})
  }
  async deleteuser(id:any){
    await this.myuserservice.deleteUser(id).subscribe(res=>{console.log(res)},err=>{console.log(err)})
    this.myroute.navigateByUrl('/dashboard');
  }
}
