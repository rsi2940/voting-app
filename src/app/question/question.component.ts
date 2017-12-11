import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseApp } from 'angularfire2';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Question } from '../question.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionRef;
  questionDocument: AngularFirestoreDocument<Question>;
  question: Observable<Question>;
  id: string;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fb: FirebaseApp
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.questionDocument = this.afs.collection('questions').doc(`${this.id}`);
    this.question = this.questionDocument.valueChanges();
    this.questionRef = this.fb
      .firestore()
      .collection('questions')
      .doc(this.id);
  }

  vote(direction: string) {
    this.fb.firestore().runTransaction(transaction => {
      return transaction.get(this.questionRef).then(question => {
        const newVotes = question.data().votes + (direction === 'yes' ? 1 : -1);
        transaction.update(this.questionRef, { votes: newVotes });
      });
    });
  }
}
