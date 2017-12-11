import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { Question } from '../question.model';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: string;
  emptyQuestion: boolean;
  questionsCollection: AngularFirestoreCollection<Question>;

  constructor(private afs: AngularFirestore) {
    this.questionsCollection = afs.collection<Question>('questions');
  }

  ngOnInit() {}

  async onCreate() {
    if (this.newQuestion) {
      const title = this.newQuestion.trim();
      await this.questionsCollection.add({
        title: this.newQuestion,
        votes: 0
      });
      this.emptyQuestion = false;
    } else {
      this.emptyQuestion = true;
    }

    this.newQuestion = '';
  }
}
