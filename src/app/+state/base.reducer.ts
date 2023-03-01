import { Directive } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import { BaseActions } from './base.actions';

export interface BaseState {
  browse: [];
  load: {};
  loaded: boolean;
  error?: string | null;
}

@Directive()
export abstract class BaseReducer<T> {
  public initialState: BaseState = {
    browse: [],
    load: {},
    loaded: false,
    error: null,
  };

  constructor(public actions: BaseActions<T>) {
    console.log('BaseReducer constructor...');
  }

  public reducer = createReducer(
    this.initialState,
    on(
      this.actions.initBrowse,
      (state, action) => (
        console.log(state, action),
        {
          ...state,
          load: {},
          loaded: false,
          error: null,
        }
      )
    ),
    on(
      this.actions.loadBrowseSuccess,
      (state, { browse }) => (
        console.log(state, { browse }),
        {
          ...state,
          browse,
          load: {},
          loaded: true,
          error: null,
        }
      )
    ),
    on(
      this.actions.loadBrowseFailure,
      (state, { error }) => (
        console.log(state, { error }),
        {
          ...state,
          browse: [],
          load: {},
          loaded: true,
          error,
        }
      )
    )
  );

  public baseReducer(state: BaseState | undefined, action: Action) {
    return this.reducer(state, action);
  }
}
