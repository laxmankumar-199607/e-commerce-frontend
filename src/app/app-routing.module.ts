import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'category/:id', component: CategoryComponent },
  // { path: 'mt-fsh-egg/:id', component: CategoryComponent },
  // { path: 'bath-body', component: CategoryComponent },
  // { path: 'cool-drink', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
