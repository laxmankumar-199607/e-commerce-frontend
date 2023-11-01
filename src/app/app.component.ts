import { Component } from '@angular/core';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-commerce';

  categoryList: any = [];

  constructor(public categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categoryList = data;
      this.categoryList.sort((a: any, b: any) => a?.id - b?.id);
    });
  }


}
