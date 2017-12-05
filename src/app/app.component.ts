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
  styleUrls: ['./app.component.css'],
  template: `<ul>
  <li class="text" *ngFor="let user of users | async">
    {{user.name}} is {{user.age}} y.o.
  </li>
</ul>
  `
})
export class AppComponent {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private db: AngularFirestore) {
    // console.log(db.collection('users'));
    this.usersCollection = db.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }
}
