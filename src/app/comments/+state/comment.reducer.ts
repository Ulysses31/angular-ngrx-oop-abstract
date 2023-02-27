import { BaseReducer, BaseState } from 'src/app/+state/base.reducer';
import { CommentDto } from './../comment.model';
import { CommentActions } from './comment.actions';

export const COMMENTS_FEATURE_KEY = 'comments';

export interface CommentsState extends BaseState {}

export class CommentReducer extends BaseReducer<CommentDto> {
  public override initialState!: CommentsState;

  constructor(public override actions: CommentActions) {
    super(actions);
    console.log('CommentReducer constructor...');
  }
}
