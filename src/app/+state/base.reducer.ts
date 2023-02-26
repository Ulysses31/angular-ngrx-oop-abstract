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
      this.actions.increment,
      (state, action) => (
        console.log(state, action),
        {
          ...state,
          browse: action,
        }
      )
    )
    // on(this.actions.decrement as ActionCreator, (state, action) => {
    //   state = state - 1;
    //   console.log({ state, action });
    //   return state;
    // }),
    // on(this.actions.reset as ActionCreator, (state, action) => {
    //   state = 0;
    //   console.log({ state, action });
    //   return state;
    // })
  );

  public baseReducer(state: BaseState | undefined, action: Action) {
    return this.reducer(state, action);
  }
}
