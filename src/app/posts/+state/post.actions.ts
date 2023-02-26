import { PostDto } from './../post.model';
import { Directive } from "@angular/core";
import { BaseActions } from "src/app/+state/base.actions";

@Directive()
export class PostActions extends BaseActions<PostDto> {
  constructor() {
    const type = "Post Actions";
    super(type);
    console.log("PostActions constructor...");
  }

  override ngOnInit(): void {
    this.ngOnInit();
  }
}
