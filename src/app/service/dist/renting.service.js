"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RentingService = void 0;
var core_1 = require("@angular/core");
var RentingService = /** @class */ (function () {
    function RentingService(myhttpclient) {
        this.myhttpclient = myhttpclient;
    }
    RentingService.prototype.AddRenting = function (data) {
        return this.myhttpclient.post('http://localhost:3333/api/renting-operation/add-renting', data);
    };
    RentingService.prototype.GetAllRental = function () {
        return this.myhttpclient.get('http://localhost:3333/api/renting-operation/all-renting');
    };
    RentingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RentingService);
    return RentingService;
}());
exports.RentingService = RentingService;
