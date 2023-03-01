import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { BaseService } from '../base.service';
import { BaseActions } from './base.actions';
import { BaseState } from './base.reducer';


@Injectable()
export abstract class BaseEffects<T> {
  public actions$: Actions = inject(Actions) as any;
  public router = inject(Router);
  public route = inject(ActivatedRoute);

  constructor(
    public baseActions: BaseActions<T>,
    public service: BaseService<T>
  ) { }

  initBrowse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.baseActions.initBrowse),
      switchMap(() =>
        this.service.getAll().pipe(
          tap((data: any) => console.log(data)),
          map((data: BaseState) => {
            return data;
          }),
          map((data: BaseState) =>
            this.baseActions.loadBrowseSuccess({
              browse: data,
            })
          ),
          catchError((error) =>
            of(this.baseActions.loadBrowseFailure({ error }))
          )
        )
      )
    )
  );
}
