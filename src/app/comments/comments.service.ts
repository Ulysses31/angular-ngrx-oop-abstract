import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CommentDto } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService<CommentDto> {

   override apiUrl: string =
    'https://jsonplaceholder.typicode.com/comments';

  constructor(public override http: HttpClient) {
    super(http);
  }
}
