import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Store2Effects } from './store2.effects';
import { reducer } from './store2.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('store2', reducer),
        EffectsModule.forFeature([Store2Effects])
    ],
    providers: [Store2Effects]
})
export class Store2Module { }