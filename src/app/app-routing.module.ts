import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { ListStockComponent } from './components/list-stock/list-stock.component';

const routes: Routes = [

  {
    path: "", component: LayoutsComponent, children: [
      { path: "list-stock", component: ListStockComponent },
      




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
