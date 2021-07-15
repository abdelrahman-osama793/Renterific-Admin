import { Component, OnInit } from "@angular/core";

// declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "/user-profile", title: "Admin Profile", icon: "person", class: "" },
  {
    path: "/users",
    title: "Users Table",
    icon: "group",
    class: "",
  },
  {
    path: "/approved-products",
    title: "Approved Products",
    icon: "check_box",
    class: "",
  },
  {
    path: "/pending-products",
    title: "Pending Products",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/categories",
    title: "Categories",
    icon: "category_outlined",
    class: "",
  },
  {
    path: "/logout",
    title: "Logout",
    icon: "logout",
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

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
