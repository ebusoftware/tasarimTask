import { NgModule } from '@angular/core';
import { LayoutsComponent } from './layouts.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutsComponent,
    HeaderComponent
  ]
})
export class LayoutsModule { }