import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { PostActions } from './+state/post.actions';
import { PostsState } from './+state/post.reducer';
import { PostDto } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  template: ` <p>posts works!</p> `,
  styleUrls: ['./posts.component.css'],
  providers: [PostActions]
})
export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {
  public posts$!: Observable<PostDto[]>;

  constructor(
    private store: Store<PostsState>,
    private actions: PostActions,
    public service: PostsService
  ) {}

  ngOnInit(): void {
    this.getAll().subscribe((posts: PostDto[]) => {
      this.store.dispatch(this.actions.increment(posts));
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  getAll(): Observable<PostDto[]> {
    return this.service.getAll().pipe(
      tap((dto) => console.log(dto)),
      map((dto) => {
        return dto;
      })
    );
  }
}
