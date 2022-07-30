import { Component, OnInit } from '@angular/core';
import { deleteMonthlyHealthClinicSummary, getMonthlyHealthClinicSummaries } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-monthly-health-clinic-report',
  templateUrl: './monthly-health-clinic-report.component.html',
  styleUrls: ['./monthly-health-clinic-report.component.scss']
})

export class MonthlyHealthClinicReportComponent implements OnInit {
  monthlyHealthClinicSummaries: any = [];

  constructor(private api: APIService) { 
    getMonthlyHealthClinicSummaries(this.api)
      .then((monthlyHealthClinicSummaries)=>{     
        this.monthlyHealthClinicSummaries = monthlyHealthClinicSummaries;
        console.log("done loading monthlyHealthClinicSummaries "+ this.monthlyHealthClinicSummaries.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyHealthClinicSummaries", e);
      }); 
  }

  ngOnInit(): void {
  }

  removingRow(event){    
    console.log(event.data);
    let monthlyHealthClinicSummaryToDelete = event.data;

    deleteMonthlyHealthClinicSummary(this.api, monthlyHealthClinicSummaryToDelete.id, monthlyHealthClinicSummaryToDelete._version)
      .then((monthlyHealthClinicSummaryDeleted)=>{
        console.log("done deleting MonthlyHealthClinicSummary "+ monthlyHealthClinicSummaryDeleted); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
    
  }

}
