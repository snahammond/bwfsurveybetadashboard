import { Component, OnInit } from '@angular/core';
import { deleteMonthlySchoolSummary, getMonthlySchoolSummaries } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-monthly-school-report',
  templateUrl: './monthly-school-report.component.html',
  styleUrls: ['./monthly-school-report.component.scss']
})
export class MonthlySchoolReportComponent implements OnInit {
  monthlySchoolSummaries: any = [];

  constructor(private api: APIService) {
    getMonthlySchoolSummaries(this.api)
      .then((monthlySchoolSummaries)=>{     
        this.monthlySchoolSummaries = monthlySchoolSummaries;
        console.log("done loading monthlySchoolSummaries "+ this.monthlySchoolSummaries.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlySchoolSummaries", e);
      }); 
  }

  ngOnInit(): void {
  }

  removingRow(event){    
    console.log(event.data);
    let monthlySchoolSummaryToDelete = event.data;

    deleteMonthlySchoolSummary(this.api, monthlySchoolSummaryToDelete.id, monthlySchoolSummaryToDelete._version)
      .then((monthlySchoolSummaryDeleted)=>{
        console.log("done deleting MonthlySchoolSummary "+ monthlySchoolSummaryDeleted); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
    
  }

}
