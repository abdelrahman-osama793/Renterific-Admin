"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var components_module_1 = require("./components/components.module");
var app_component_1 = require("./app.component");
var core_2 = require("@agm/core");
var admin_layout_component_1 = require("./layouts/admin-layout/admin-layout.component");
var users_table_component_1 = require("./users-table/users-table.component");
var approved_products_table_component_1 = require("./approved-products-table/approved-products-table.component");
var pending_products_table_component_1 = require("./pending-products-table/pending-products-table.component");
var categories_table_component_1 = require("./categories-table/categories-table.component");
var login_component_1 = require("./login/login.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent,
                users_table_component_1.UsersTableComponent,
                approved_products_table_component_1.ApprovedProductsTableComponent,
                pending_products_table_component_1.PendingProductsTableComponent,
                categories_table_component_1.CategoriesTableComponent,
                login_component_1.LoginComponent,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
