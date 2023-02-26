import { CommentDto } from './../comment.model';
import { Directive } from "@angular/core";
import { BaseActions } from "src/app/+state/base.actions";

@Directive()
export class CommentActions extends BaseActions<CommentDto> {
  constructor() {
    const type = "Comment Actions";
    super(type);
    console.log("CommentActions constructor...");
  }

  override ngOnInit(): void {
    this.ngOnInit();
  }
}
