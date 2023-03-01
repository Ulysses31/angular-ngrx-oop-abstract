import { Injectable } from '@angular/core';
import { BaseEffects } from 'src/app/+state/base.effects';
import { CommentDto } from '../comment.model';
import { CommentsService } from '../comments.service';
import { CommentActions } from './comment.actions';

@Injectable()
export class CommentEffects extends BaseEffects<CommentDto> {
  constructor(
    public commentActions: CommentActions,
    public commentService: CommentsService
  ) {
    super(commentActions, commentService);
  }
}
