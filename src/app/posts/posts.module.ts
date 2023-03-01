import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostReducer, POSTS_FEATURE_KEY } from './+state/post.reducer';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostActions } from './+state/post.actions';
import { PostEffects } from './+state/post.effects';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(
      POSTS_FEATURE_KEY,
      new PostReducer(new PostActions()).reducer
    ),
    EffectsModule.forFeature([PostEffects])
  ],
  providers: [PostActions]
})
export class PostsModule {}
