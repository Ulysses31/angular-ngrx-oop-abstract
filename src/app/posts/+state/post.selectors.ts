import { PostsState, POSTS_FEATURE_KEY } from './post.reducer';
import { Directive } from '@angular/core';
import { BaseSelectors } from 'src/app/+state/base.selectors';

@Directive()
export class PostSelectors extends BaseSelectors<PostsState> {
  constructor() {
    const featureName: string = POSTS_FEATURE_KEY;
    super(featureName);
    console.log('PostSelectors constructor...');
  }

  override ngOnInit(): void {
    this.ngOnInit();
    console.log('PostSelectors onInit...');
  }
}
