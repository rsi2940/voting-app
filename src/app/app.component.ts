import { Component } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `<h1>Voting App</h1>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {}
