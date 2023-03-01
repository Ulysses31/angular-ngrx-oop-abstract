import { BaseDto } from "../base.model";

export class CommentDto extends BaseDto {
  postId?: null | number;
  name?: null | string;
  email?: null | string;
  body?: null | string;
}
