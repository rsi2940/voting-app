import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Question } from '../question.model';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  questionRef;
  questionDocument: AngularFirestoreDocument<Question>;
  question: Observable<Question>;
  id: string;
  emptyQuestion: boolean;
  currentQuestion: string;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
    this.currentQuestion = 'question is loading.....';
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.questionDocument = this.afs.collection('questions').doc(`${this.id}`);
    this.question = this.questionDocument.valueChanges();
    this.question.subscribe(
      question => (this.currentQuestion = question.title)
    );
  }
  async onUpdate() {
    if (this.currentQuestion) {
      const title = this.currentQuestion.trim();
      await this.questionDocument.update({
        title
      });
      this.emptyQuestion = false;
    } else {
      this.emptyQuestion = true;
    }
  }
}
