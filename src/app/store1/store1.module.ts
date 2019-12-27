import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Store1Effects } from './store1.effects';
import { reducer } from './store1.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('store1', reducer),
        EffectsModule.forFeature([Store1Effects])
    ],
    providers: [Store1Effects]
})
export class Store1Module { }