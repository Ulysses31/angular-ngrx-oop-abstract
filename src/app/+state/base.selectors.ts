import { BaseState } from 'src/app/+state/base.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Directive, OnInit } from '@angular/core';


@Directive()
export abstract class BaseSelectors<T extends BaseState> implements OnInit {
  constructor(public featureName: string) {
    console.log('BaseActions constructor...');
  }

  ngOnInit(): void {
    console.log('BaseSelectors onInit...');
  }

  public selectBaseState = createFeatureSelector<T>(this.featureName);

  public selectBaseBrowse = createSelector(
    this.selectBaseState,
    (state: BaseState) => {
      return state.browse;
    }
  );

  public selectBaseLoad = createSelector(
    this.selectBaseState,
    (state: BaseState) => {
      return state.load;
    }
  );

  public selectBaseLoaded = createSelector(
    this.selectBaseState,
    (state: BaseState) => {
      return state.loaded;
    }
  );

  public selectBaseError = createSelector(
    this.selectBaseState,
    (state: BaseState) => {
      return state.error;
    }
  );

}

// export const selectSelectedRegion = createSelector(
//   selectAllRegions,
//   selectSelectedId,
//   (categories, selectedId) =>
//     selectedId
//       ? categories.find((item) => item.id === selectedId)
//       : undefined
// );
