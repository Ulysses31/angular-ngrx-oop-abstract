import { createReducer, on } from '@ngrx/store';
import { BaseReducer, BaseState } from 'src/app/+state/base.reducer';
import { PostDto } from './../post.model';
import { PostActions } from './post.actions';

export interface PostsState extends BaseState {
  posts: PostDto[];
}

export class PostReducer extends BaseReducer<PostDto> {
  constructor(public override actions: PostActions) {
    super(actions);
    console.log('PostReducer constructor...');

    //###### override base method if we add extra actions ###### //
    this.initialState = {
      ...this.initialState,
      posts: [],
    } as PostsState;

    this.reducer = createReducer(
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
    );

    //###### override base method if we add extra actions ###### //
  }
}
