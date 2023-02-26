import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { StoreModule } from '@ngrx/store';
import { CommentActions } from './+state/comment.actions';
import { CommentReducer } from './+state/comment.reducer';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    StoreModule.forFeature(
      //   //fromPosts.postsReducer
      'comments',
      new CommentReducer(new CommentActions()).reducer
    ),
  ],
})
export class CommentsModule {}
