import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `

    <h1>Voting App</h1>
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
  constructor() {}
}
