import { CommentsService } from './comments.service';
import { CommentDto } from './comment.model';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { PostDto } from '../posts/post.model';
import { CommentActions } from './+state/comment.actions';
import { CommentsState } from './+state/comment.reducer';

@Component({
  selector: 'app-comments',
  template: ` <p>comments works!</p> `,
  styleUrls: ['./comments.component.css'],
  providers: [CommentActions]
})
export class CommentsComponent implements OnInit, AfterViewInit, OnDestroy {
  public comments$!: Observable<CommentDto[]>;

  constructor(
    private store: Store<CommentsState>,
    private actions: CommentActions,
    public service: CommentsService
  ) {}

  ngOnInit(): void {
    this.getAll().subscribe((comments: CommentDto[]) => {
      this.store.dispatch(this.actions.increment(comments));
    });
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}

  getAll(): Observable<CommentDto[]> {
    return this.service.getAll().pipe(
      tap((dto) => console.log(dto)),
      map((dto) => {
        return dto;
      })
    );
  }
}
