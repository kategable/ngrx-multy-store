import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Store1State } from '../store1/store1.state';
import * as StoreActions1 from '../store1/store1.actions';
import { getItems1 } from '../store1/store1.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent {
  title = 'homes from feature1/store1';
  items$: any;
  selectedId: number;
  constructor(private store1: Store<Store1State>, private router: Router) {
    this.store1.dispatch(new StoreActions1.GetItems());
    this.items$ = this.store1.select(getItems1);

  }
  

}
