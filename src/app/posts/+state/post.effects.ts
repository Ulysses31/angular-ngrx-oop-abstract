import { Injectable } from '@angular/core';
import { BaseEffects } from 'src/app/+state/base.effects';
import { PostDto } from '../post.model';
import { PostsService } from '../posts.service';
import { PostActions } from './post.actions';

@Injectable()
export class PostEffects extends BaseEffects<PostDto> {
  constructor(
    public postActions: PostActions,
    public postService: PostsService
  ) {
    super(postActions, postService);
  }
}
