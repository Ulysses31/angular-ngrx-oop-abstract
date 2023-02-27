import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CommentActions } from './+state/comment.actions';
import { CommentsState } from './+state/comment.reducer';
import { CommentSelectors } from './+state/comment.selectors';
import { CommentDto } from './comment.model';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  template: `
    <p>comments works!</p>
    <!-- <pre>{{ comments | json }}</pre> -->
    <pre>{{ comments$ | async | json }}</pre>
  `,
  styleUrls: ['./comments.component.css'],
  providers: [CommentActions, CommentSelectors],
})
export class CommentsComponent implements OnInit, AfterViewInit, OnDestroy {
  public comments$: Observable<CommentDto[]> = this.store.select(
    this.commentSelectors.selectBaseBrowse
  );

  constructor(
    private store: Store<CommentsState>,
    private actions: CommentActions,
    private commentSelectors: CommentSelectors,
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
      // tap((dto) => console.log(dto)),
      map((dto) => {
        return dto;
      })
    );
  }
}
