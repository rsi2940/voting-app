import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Question } from '../new-question/new-question.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  questionDocument: AngularFirestoreDocument<Question>;
  question: Observable<Question>;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.questionDocument = this.afs.doc(`question/${id}`);
    this.question = this.questionDocument.valueChanges();
  }
  onYes() {}
  onNo() {}
}
