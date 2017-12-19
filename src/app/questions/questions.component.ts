import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Question } from '../question.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionsCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  constructor(private afs: AngularFirestore, private authService: AuthService) {
    this.questionsCollection = afs.collection<Question>(
      `users/rishi/questions`
    );
    this.questions = this.questionsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  ngOnInit() {}
}
