"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var ProductService = /** @class */ (function () {
    function ProductService(httpclient) {
        this.httpclient = httpclient;
    }
    ProductService.prototype.AllProduct = function () {
        return this.httpclient.get('http://localhost:3333/api/product/all-product');
    };
    ProductService.prototype.UpdateProduct = function (id, data) {
        return this.httpclient.put("http://localhost:3333/api/product/update-product/" + id, data);
    };
    ProductService.prototype.DeleteProduct = function (id) {
        return this.httpclient["delete"]("http://localhost:3333/api/product/delete-product/" + id);
    };
    ProductService.prototype.getCategoryFproduct = function () {
        return this.httpclient.get('http://localhost:3333/api/product/get-category-from-productcollection');
    };
    ProductService.prototype.getUserFproduct = function () {
        return this.httpclient.get('http://localhost:3333/api/product/get-user-from-productcollection');
    };
    ProductService.prototype.SearchBCategoryTitle = function (title) {
        return this.httpclient.get("http://localhost:3333/api/product/search-by-category-title/" + title);
    };
    ProductService.prototype.SearchBUserEmail = function (email) {
        return this.httpclient.get("http://localhost:3333/api/product/search-by-user-email/" + email);
    };
    ProductService.prototype.getProduct = function (id) {
        return this.httpclient.get("http://localhost:3333/api/product/get-product/" + id);
    };
    ProductService.prototype.AddProduct = function (data, categoryTitle, userEmail) {
        console.log([data, categoryTitle, userEmail]);
        var config = { headers: { cattitle: categoryTitle, useremail: userEmail } };
        return this.httpclient.post("http://localhost:3333/api/product/add-product", data, config);
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
