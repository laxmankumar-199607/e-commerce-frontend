import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  id: any;

  activeItems: any = [];

  cities: any[] = [];

  constructor(
    private activatedroute: ActivatedRoute,
    public categoryService: CategoryService
  ) {
    activatedroute.params.subscribe((response) => {
      this.id = response['id'];

      this.selectedCategory(this.id);
    });
    this.cities = [{id : 1,name : "Laxman"}, {id : 1,name : "Naganagouda"}, {id : 1,name : "Patil"},]
  }

  selectedCategory(categoryId: number) {
    this.categoryService.activeItemList = [];
    this.categoryService
      .getAllItemsByCategory(categoryId)
      .subscribe((data: any) => {
        this.categoryService.itemList = data;
        this.categoryService.itemList.sort((a: any, b: any) => a?.id - b?.id);

        this.categoryService.itemList.forEach((element: any) => {
          if (element.isActive) {
            this.categoryService.activeItemList.push(element);
          }
        });
      });
  }

  isActiveItem(newItem: any, eve: any): void {
    newItem.isActive = eve.target.checked;

    this.categoryService.getActiveItems(newItem).subscribe((data) => {
      this.categoryService.activeItemList.forEach(
        (element: any, index: number) => {
          if (element?.id === newItem?.id) {
            this.categoryService.activeItemList[index] = data;
          }
        }
      );
    });
    setTimeout(() => {
      this.selectedCategory(this.id);
    }, 2000);
  }

  addtoCart(item : any): void {
    console.log(item)
  }
}
