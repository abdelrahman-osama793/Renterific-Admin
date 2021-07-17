import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
email = localStorage.getItem('email')
name = localStorage.getItem('name')
Role_name = localStorage.getItem('Role_name')
Phone = localStorage.getItem('phone')
  constructor() { }

  ngOnInit() {
  }

}
