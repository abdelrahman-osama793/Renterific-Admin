"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryService = void 0;
var core_1 = require("@angular/core");
var CategoryService = /** @class */ (function () {
    function CategoryService(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    CategoryService.prototype.getAllCategory = function () {
        return this._HttpClient.get('http://localhost:3333/api/category/all-category');
    };
    CategoryService.prototype.addNewCategory = function (data) {
        return this._HttpClient.post('http://localhost:3333/api/category/add-category', data);
    };
    CategoryService.prototype.searchByCategoryTitle = function (title) {
        return this._HttpClient.get("https://api.themoviedb.org/3/movie/" + title + "?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US");
    };
    CategoryService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
