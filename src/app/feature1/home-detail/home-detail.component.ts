import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Store1Module } from '../store1';
import { Store1State } from '../store1/store1.state';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getSelectedItem } from '../store1/store1.selectors';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {
  name: any;
  id: any;
  item$: Observable<any>;

  constructor(
    private store: Store<Store1State>, private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.store.select(getSelectedItem((params.get('id'))))
      )
    );
  }
}
