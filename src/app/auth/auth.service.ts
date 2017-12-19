import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    afAuth.authState.subscribe(user => (this.user = user));
  }

  get user(): firebase.User {
    return this._user;
  }
  set user(value: firebase.User) {
    this._user = value;
  }

  get authenticated(): boolean {
    return this._user !== null;
  }

  get id(): string {
    return this.authenticated ? this._user.uid : '';
  }
  async signInWithGoogle() {
    const response = await this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
    this.router.navigate(['/questions']);
    // console.log(response);
  }
  signOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
