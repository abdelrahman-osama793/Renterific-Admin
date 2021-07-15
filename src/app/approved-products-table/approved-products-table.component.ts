import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/service/product.service";

@Component({
  selector: "app-approved-products-table",
  templateUrl: "./approved-products-table.component.html",
  styleUrls: ["./approved-products-table.component.css"],
})
export class ApprovedProductsTableComponent implements OnInit {
  productsList: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAcceptedProducts();
  }

  async getAcceptedProducts() {
    await this.productService.AllProduct().subscribe((productResponse: any) => {
      for (let product of productResponse) {
        if (product.status_adminstaration === "accepted") {
          this.productsList.push(product);
        }
      }
      console.log(this.productsList);
    });
  }

  async onDeleteProduct(id: any) {
    await this.productService.DeleteProduct(id).subscribe((response: any) => {
      this.getAcceptedProducts();
    });
  }
}
