import { BaseDto } from "../base.model";

export class PostDto extends BaseDto {
  userId?: null | number;
  title?: null | string;
  body?: null | string;
}
