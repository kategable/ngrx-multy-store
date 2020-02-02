import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomeListComponent,
    children: [
      {
        path: '', 
        children: [
          { path: ':id', component: HomeDetailComponent },      
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeListRoutingModule { }
