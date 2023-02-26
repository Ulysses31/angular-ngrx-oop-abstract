import { PostReducer } from './+state/post.reducer';
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
      //fromPosts.postsReducer
      'posts',
      new PostReducer(new PostActions()).reducer
    ),
  ],
})
export class PostsModule {}
