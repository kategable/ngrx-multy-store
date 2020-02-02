import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeListRoutingModule } from './home-list-routing.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { Store1Module } from './store1';



@NgModule({
  declarations: [HomeListComponent, HomeDetailComponent],
  imports: [
    CommonModule,
    HomeListRoutingModule,
    Store1Module
  ]
})
export class HomeListModule { }
