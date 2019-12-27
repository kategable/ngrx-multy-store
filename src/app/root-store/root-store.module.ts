import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RootEffects } from './effects';  
import { reducers } from '.';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([RootEffects]),
    ],
    providers: [RootEffects]
})
export class RootStoreModule { }