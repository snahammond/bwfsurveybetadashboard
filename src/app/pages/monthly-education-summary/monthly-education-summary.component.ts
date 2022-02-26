import { Component, OnInit } from '@angular/core';
import { getMonthlyEducationSummaries } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-monthly-education-summary',
  templateUrl: './monthly-education-summary.component.html',
  styleUrls: ['./monthly-education-summary.component.scss']
})
export class MonthlyEducationSummaryComponent implements OnInit {

  monthlyEducationSummaries: any = [];

  constructor(private api: APIService) { 
    getMonthlyEducationSummaries(this.api)
      .then((monthlyEducationSummaries)=>{     
        this.monthlyEducationSummaries = monthlyEducationSummaries;
        console.log("done loading monthlyEducationSummaries "+ this.monthlyEducationSummaries.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyEducationSummaries", e);
      });
  }

  ngOnInit(): void {
  }

}
