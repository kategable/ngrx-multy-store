import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, getItems } from './root-store';
import * as StoreActions from './root-store/actions'; 
import * as StoreActions1 from './store1/store1.actions'; 
import { Store1State } from './store1/store1.state';
import { getItems1 } from './store1/store1.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-multy-store';
  items$: any;
  items1$: any;
  show: boolean;
  show1: boolean;
  constructor(private store: Store<State>,private store2: Store<Store1State>) {
    this.store.dispatch(new StoreActions.Initialize());

    this.items$ = this.store.select(getItems);
    this.items1$ = this.store.select(getItems1);

  }

  getItems() {
    this.show = !this.show;
  }
  getItems1() {
    this.store2.dispatch(new StoreActions1.GetItems())
  }
}
