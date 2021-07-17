"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidebarComponent = exports.ROUTES = void 0;
var core_1 = require("@angular/core");
exports.ROUTES = [
    { path: "home", title: "Dashboard", icon: "dashboard", "class": "" },
    { path: "user-profile", title: "Admin Profile", icon: "person", "class": "" },
    {
        path: "users",
        title: "Users Table",
        icon: "group",
        "class": ""
    },
    {
        path: "approved-products",
        title: "Approved Products",
        icon: "check_box",
        "class": ""
    },
    {
        path: "pending-products",
        title: "Pending Products",
        icon: "content_paste",
        "class": ""
    },
    {
        path: "categories",
        title: "Categories",
        icon: "category_outlined",
        "class": ""
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_AuthService) {
        this._AuthService = _AuthService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.logOut = function () {
        this._AuthService.logout();
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: "app-sidebar",
            templateUrl: "./sidebar.component.html",
            styleUrls: ["./sidebar.component.css"]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
