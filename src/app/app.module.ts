import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    EditQuestionComponent,
    NewQuestionComponent,
    NavComponent,
    AuthComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
