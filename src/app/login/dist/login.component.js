"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_AuthService, _Router) {
        this._AuthService = _AuthService;
        this._Router = _Router;
        this.error = '';
        // validation
        this.loginForm = new forms_1.FormGroup({
            Email: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.email]),
            Password: new forms_1.FormControl(null, [forms_1.Validators.required])
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // method for log in
    LoginComponent.prototype.submitLoginForm = function (loginForm) {
        var _this = this;
        this._AuthService.login(loginForm.value).subscribe(function (response) {
            if (response.message == "success" && response.data.Role_name == "admin") {
                localStorage.setItem('email', response.data.Email);
                localStorage.setItem('id', response.data._id);
                localStorage.setItem('password', response.data.Password);
                localStorage.setItem('phone', response.data.Phone);
                localStorage.setItem('name', response.data.Name);
                localStorage.setItem('street', response.data.Address_street);
                localStorage.setItem('city', response.data.Address_city);
                localStorage.setItem('Role_name', response.data.Role_name);
                localStorage.setItem('userToken', response.token);
                console.log(response);
                _this._AuthService.saveCurrentUser();
                _this._Router.navigate(['/dash']);
            }
            else {
                _this.error = response.message;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
