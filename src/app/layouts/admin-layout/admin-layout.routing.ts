import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { UsersTableComponent } from "app/users-table/users-table.component";
import { ApprovedProductsTableComponent } from "app/approved-products-table/approved-products-table.component";
import { PendingProductsTableComponent } from "app/pending-products-table/pending-products-table.component";
import { CategoriesTableComponent } from "app/categories-table/categories-table.component";

export const AdminLayoutRoutes: Routes = [
  { path: '', redirectTo: 'home' },
{ path: 'home', component: DashboardComponent },
  // { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "users", component: UsersTableComponent },
  { path: "approved-products", component: ApprovedProductsTableComponent },
  { path: "pending-products", component: PendingProductsTableComponent },
  { path: "categories", component: CategoriesTableComponent },
];
