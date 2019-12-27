import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Store1Module } from './store1'; 
import { RootStoreModule } from './root-store/root-store.module';
import { Store2Module } from './store2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule, 
    RootStoreModule,
    Store1Module, 
    Store2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
