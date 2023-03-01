import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { PostActions } from './+state/post.actions';
import { PostsState } from './+state/post.reducer';
import { PostSelectors } from './+state/post.selectors';
import { PostDto } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  template: `
    <p>posts works!</p>
    <!-- <pre>{{ posts | json }}</pre> -->
    <pre>{{ posts$ | async | json }}</pre>
  `,
  styleUrls: ['./posts.component.css'],
  providers: [PostActions, PostSelectors],
})
export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {
  public posts$: Observable<PostDto[]> = this.store.select(
    this.postSelectors.selectBaseBrowse
  );

  constructor(
    private store: Store<PostsState>,
    private actions: PostActions,
    private postSelectors: PostSelectors,
    public service: PostsService
  ) {}

  ngOnInit(): void {
    console.log('PostsComponent constructor...');
    this.store.dispatch(this.actions.initBrowse());
  }

  ngAfterViewInit(): void {
    console.log('PostsComponent onNgAfterViewInit...');
  }

  ngOnDestroy(): void {
    console.log('PostsComponent onNgOnDestroy...');
  }

  // getAll(): Observable<PostDto[]> {
  //   return this.service.getAll().pipe(
  //     // tap((dto) => console.log(dto)),
  //     map((dto) => {
  //       return dto;
  //     })
  //   );
  // }
}
