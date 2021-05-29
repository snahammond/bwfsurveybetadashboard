import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-initial-survey',
  templateUrl: './initial-survey.component.html',
  styleUrls: ['./initial-survey.component.scss']
})
export class InitialSurveyComponent {
  dataSource: any;

  constructor(private api: APIService) { 
    this.api.ListInitialSurveys().then(event => {      
      console.log('Length of initial surveys ' + event.items.length);
      this.dataSource = event.items;
    }).catch(e => {
      console.log('error initialSurveys...', e);
    });
  }

  

}
