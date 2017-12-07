import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

export interface Question {
  question: string;
  yesVotes: number;
  noVotes: number;
  id: string;
}

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: string;
  questionsCollection: AngularFirestoreCollection<Question>;
  constructor(private afs: AngularFirestore) {
    this.questionsCollection = afs.collection<Question>('questions');
  }

  ngOnInit() {}

  async onCreate() {
    // console.log(this.newQuestion);
    await this.questionsCollection.add({
      question: this.newQuestion,
      noVotes: 0,
      yesVotes: 0,
      id: ''
    });

    this.newQuestion = '';
  }
}
