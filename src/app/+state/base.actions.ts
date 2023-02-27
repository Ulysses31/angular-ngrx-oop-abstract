import { Directive, OnInit } from '@angular/core';
import { createAction, props } from '@ngrx/store';

@Directive()
export abstract class BaseActions<T> implements OnInit {
  public increment: any;
  public decrement: any;
  public reset: any;

  constructor(public tt: string) {
    console.log('BaseActions constructor...');

    this.increment = createAction(
      `[${tt}] Increment`,
      props<{ browse: T[] }>()
    );

    this.decrement = createAction(`[${tt}] Decrement`);

    this.reset = createAction(`[${tt}] Reset`);
  }

  ngOnInit(): void {
    console.log('BaseActions onInit...');
  }
}
