import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { StoreModule } from '@ngrx/store';
import { CommentActions } from './+state/comment.actions';
import { CommentReducer, COMMENTS_FEATURE_KEY } from './+state/comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CommentEffects } from './+state/comment.effects';

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    StoreModule.forFeature(
      COMMENTS_FEATURE_KEY,
      new CommentReducer(new CommentActions()).reducer
    ),
    EffectsModule.forFeature([CommentEffects])
  ],
  providers: [CommentActions]
})
export class CommentsModule {}
