import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `

    <h1>Voting App</h1>
    <div class="router-outlet">
    <router-outlet></router-outlet>
    </div>
    <app-nav></app-nav>
  `
})
export class AppComponent {
  constructor() {}
}
