import { Component, OnInit } from '@angular/core';
import { deleteHouseholdAttendingMeeting, deleteMonthlyEducationSummary, getMonthlyEducationSummaries, getMonthlyHouseholdsAttendingMeeting } from 'src/app/shared/data-utilities';
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

  removingRow(event){    
    console.log(event.data);
    let monthlyEducationSummaryToDelete = event.data;

    deleteMonthlyEducationSummary(this.api, monthlyEducationSummaryToDelete.id, monthlyEducationSummaryToDelete._version)
      .then((monthlyEducationSummaryDeleted)=>{
        
        console.log("done deleting monthly education summary "+ monthlyEducationSummaryDeleted); 

        //delete all the households in this meeting
        getMonthlyHouseholdsAttendingMeeting(this.api,monthlyEducationSummaryToDelete.id)
          .then((monthlyHouseholdsAttendingMeeting)=>{     
            console.log("done loading monthlyHouseholdAttendingMeeting at deleting of meeting"+ monthlyHouseholdsAttendingMeeting.length);   
            for(let monthlyHouseholdAttendingMeetingToDelete of monthlyHouseholdsAttendingMeeting){
              deleteHouseholdAttendingMeeting(this.api, monthlyHouseholdAttendingMeetingToDelete.id, monthlyHouseholdAttendingMeetingToDelete._version)
                .then((householdAttendingMeetingDeleted)=>{                  
                  console.log("done deleting household attending at deleting of meeting"+ householdAttendingMeetingDeleted); 
                })
                .catch(e=>{
                  console.log(e); 
                });
            }         
          })
          .catch(e=>{
              console.log("error could not load monthlyHouseholdAttendingMeeting", e);
          });
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
    
  }

}
