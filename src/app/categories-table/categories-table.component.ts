import { Component, OnInit } from "@angular/core";
import { CategoryService } from "app/service/category.service";
import { Observable, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-categories-table",
  templateUrl: "./categories-table.component.html",
  styleUrls: ["./categories-table.component.css"],
})
export class CategoriesTableComponent implements OnInit {
  category: any;
  formData: FormData = new FormData();
  constructor(private _CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCat();
  }

  async getAllCat() {
    let x: any;
    await this._CategoryService.getAllCategory().subscribe(
      (res) => {
        x = res;
        this.category = [];
        console.log(x);
        for (const cat of res) {
          this.category.push(cat);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async addCat(title: any, decs: any) {
    let dataa = {
      title: title,
      decs: decs,
    };

    let data = await this._CategoryService.addNewCategory(dataa).subscribe(
      (res) => {
        console.log(res);
        this.getAllCat();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
