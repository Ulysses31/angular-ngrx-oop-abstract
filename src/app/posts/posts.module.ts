import { PostReducer, POSTS_FEATURE_KEY } from './+state/post.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { PostActions } from './+state/post.actions';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(
      POSTS_FEATURE_KEY,
      new PostReducer(new PostActions()).reducer
    ),
  ],
})
export class PostsModule {}
