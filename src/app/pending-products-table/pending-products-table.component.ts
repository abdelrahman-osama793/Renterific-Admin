import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/service/product.service";

@Component({
  selector: "app-pending-products-table",
  templateUrl: "./pending-products-table.component.html",
  styleUrls: ["./pending-products-table.component.css"],
})
export class PendingProductsTableComponent implements OnInit {
  productsList: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getPendingProducts();
  }

  async getPendingProducts() {
    await this.productService.AllProduct().subscribe((productResponse: any) => {
      for (let product of productResponse) {
        if (product.status_adminstaration === "pending") {
          this.productsList.push(product);
        }
      }
      console.log(this.productsList);
    });
  }

  async onDeleteProduct(id: any) {
    await this.productService.DeleteProduct(id).subscribe((response: any) => {
      console.log(response);
    });
  }

  async onApproveProduct(id: any) {
    let data = {
      status_adminstaration: "accepted",
    };

    await this.productService.UpdateProduct(id, data).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
