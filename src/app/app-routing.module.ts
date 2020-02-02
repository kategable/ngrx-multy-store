import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'homes',
    loadChildren: () => import('./feature1/home-list.module').then(mod => mod.HomeListModule),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
