import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-initial-survey',
  templateUrl: './initial-survey.component.html',
  styleUrls: ['./initial-survey.component.scss']
})
export class InitialSurveyComponent {
  initialSurveys: any = [];

  constructor(private api: APIService) { 
    this.loadInitialSurveys(null).then(()=>{      
      console.log("done loading loadInitialSurveys "+ this.initialSurveys.length);
    }).catch(e=>{
      console.log("error could not load loadInitialSurveys", e);
    });
  }

  
  async loadInitialSurveys(nextToken){    
    let promiseInitialSurveys: any;
    if(nextToken){
      promiseInitialSurveys = this.api.ListInitialSurveys(null,null,nextToken);
    }else{
      promiseInitialSurveys = this.api.ListInitialSurveys(null,null,null);
    }

    let promiseInitialSurveysDone = await promiseInitialSurveys;
    this.initialSurveys.push(...promiseInitialSurveysDone.items);

    if(promiseInitialSurveysDone.nextToken){
      console.log("calling loadInitialSurveys recursively " + this.initialSurveys.length);
      await this.loadInitialSurveys(promiseInitialSurveysDone.nextToken);
    }  
  }

  

}
