import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { PostDto } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<PostDto> {

  override apiUrl: string =
    'https://jsonplaceholder.typicode.com/posts';

  constructor(public override http: HttpClient) {
    super(http);
  }
}
