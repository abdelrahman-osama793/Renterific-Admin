"use strict";
exports.__esModule = true;
exports.AdminLayoutRoutes = void 0;
var dashboard_component_1 = require("../../dashboard/dashboard.component");
var user_profile_component_1 = require("../../user-profile/user-profile.component");
var users_table_component_1 = require("app/users-table/users-table.component");
var approved_products_table_component_1 = require("app/approved-products-table/approved-products-table.component");
var pending_products_table_component_1 = require("app/pending-products-table/pending-products-table.component");
var categories_table_component_1 = require("app/categories-table/categories-table.component");
exports.AdminLayoutRoutes = [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: dashboard_component_1.DashboardComponent },
    // { path: "dashboard", component: DashboardComponent },
    { path: "user-profile", component: user_profile_component_1.UserProfileComponent },
    { path: "users", component: users_table_component_1.UsersTableComponent },
    { path: "approved-products", component: approved_products_table_component_1.ApprovedProductsTableComponent },
    { path: "pending-products", component: pending_products_table_component_1.PendingProductsTableComponent },
    { path: "categories", component: categories_table_component_1.CategoriesTableComponent },
];
