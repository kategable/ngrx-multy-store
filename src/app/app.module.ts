import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RootStoreModule } from './root-store/root-store.module';
import { Store2Module } from './feature2/store2';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule, 
    RootStoreModule,
    Store2Module    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
