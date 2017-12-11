import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Question } from '../question.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionsCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  constructor(private afs: AngularFirestore) {
    this.questionsCollection = afs.collection<Question>('questions');
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
