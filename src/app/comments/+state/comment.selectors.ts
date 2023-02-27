import { CommentsState, COMMENTS_FEATURE_KEY } from './comment.reducer';
import { Directive } from '@angular/core';
import { BaseSelectors } from 'src/app/+state/base.selectors';

@Directive()
export class CommentSelectors extends BaseSelectors<CommentsState> {
  constructor() {
    const featureName: string = COMMENTS_FEATURE_KEY;
    super(featureName);
    console.log('CommentSelectors constructor...');
  }

  override ngOnInit(): void {
    this.ngOnInit();
    console.log('CommentSelectors onInit...');
  }
}
