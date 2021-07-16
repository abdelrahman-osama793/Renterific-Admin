import { Component, OnInit } from "@angular/core";
import {AuthService} from '../../auth.service'
// declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "home", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "user-profile", title: "Admin Profile", icon: "person", class: "" },
  {
    path: "users",
    title: "Users Table",
    icon: "group",
    class: "",
  },
  {
    path: "approved-products",
    title: "Approved Products",
    icon: "check_box",
    class: "",
  },
  {
    path: "pending-products",
    title: "Pending Products",
    icon: "content_paste",
    class: "",
  },
  {
    path: "categories",
    title: "Categories",
    icon: "category_outlined",
    class: "",
  },
 
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private _AuthService:AuthService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
  logOut(){
    this._AuthService.logout();
  }
}
