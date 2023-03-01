import { Directive, OnInit } from '@angular/core';
import { createAction, props } from '@ngrx/store';

@Directive()
export class BaseActions<T> implements OnInit {
  public initBrowse: any;
  public loadBrowseSuccess: any;
  public loadBrowseFailure: any;

  constructor(public tt: string) {
    console.log('BaseActions constructor...');

    this.initBrowse = createAction(`[${tt}] Init`);

    this.loadBrowseSuccess = createAction(
      `[${tt}] Success`,
      props<{ browse: T[] }>()
    );

    this.loadBrowseFailure = createAction(
      `[${tt}] Failure`,
      props<{ error: any }>()
    );
  }

  ngOnInit(): void {
    console.log('BaseActions onInit...');
  }
}
