import { Component }       from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class AppComponent {
  questions: any[];


  constructor(private service: QuestionService) {
    this.questions = service.getQuestions();

    // service.getQuestions1().subscribe((data) => {
    //   console.log('data from service call', data);
    //   this.questions = data;

    // });
  }

}
