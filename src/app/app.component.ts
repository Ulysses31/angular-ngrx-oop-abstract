import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<ul style="display: flex; list-style: none;">
      <li style="margin-right: 20px;">
        <a [routerLink]="['/posts']" routerLinkActive="router-link-active">
          Posts
        </a>
      </li>
      <li style="margin-right: 20px;">
        <a [routerLink]="['/comments']" routerLinkActive="router-link-active">
          Comments
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngrx-abstract';
}
