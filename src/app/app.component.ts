import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getItems } from './root-store';
import * as StoreActions from './root-store/actions'; 
import * as StoreActions1 from './feature1/store1/store1.actions'; 
import * as StoreActions2 from './feature2/store2/store2.actions'; 
import { Store1State } from './feature1/store1/store1.state';
import { Store2State } from './feature2/store2/store2.state';
import { getItems1 } from './feature1/store1/store1.selectors';
import { getItems2 } from './feature2/store2/store2.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-multy-store';
  items$: any;
  items1$: any;
  items2$: any;
  show: boolean;
  show1: boolean;
  constructor(private store: Store<State>,private store1: Store<Store1State>,private store2: Store<Store2State>) {
    this.store.dispatch(new StoreActions.Initialize());

    this.items$ = this.store.select(getItems);
    this.items1$ = this.store1.select(getItems1);
    this.items2$ = this.store2.select(getItems2);

  }

  getItems() {
    this.show = !this.show;
  }
  getItems1() {
    this.store1.dispatch(new StoreActions1.GetItems())
  }
  getItems2() {
    this.store2.dispatch(new StoreActions2.GetItems())
  }
}
