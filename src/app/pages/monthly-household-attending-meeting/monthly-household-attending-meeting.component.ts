import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { deleteHouseholdAttendingMeeting, getMonthlyHouseholdsAttendingMeeting } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-monthly-household-attending-meeting',
  templateUrl: './monthly-household-attending-meeting.component.html',
  styleUrls: ['./monthly-household-attending-meeting.component.scss']
})
export class MonthlyHouseholdAttendingMeetingComponent implements AfterViewInit {

  @Input() 
  meetingId: string;
  monthlyHouseholdsAttendingMeeting;
  

  constructor(private api: APIService) {
  }

  monthlyHouseholdAttendingMeetingDataSource: DataSource;
  ngAfterViewInit() {    
    getMonthlyHouseholdsAttendingMeeting(this.api,this.meetingId)
      .then((monthlyHouseholdsAttendingMeeting)=>{     
        this.monthlyHouseholdsAttendingMeeting = monthlyHouseholdsAttendingMeeting;
        console.log("done loading monthlyHouseholdAttendingMeeting "+ this.monthlyHouseholdsAttendingMeeting.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyHouseholdAttendingMeeting", e);
      });
  }
  
  removingRow(event){    
    console.log(event.data);
    let householdAttendingMeetingToDelete = event.data;

    deleteHouseholdAttendingMeeting(this.api, householdAttendingMeetingToDelete.id, householdAttendingMeetingToDelete._version)
      .then((householdAttendingMeetingDeleted)=>{
        
        console.log("done deleting household attending "+ householdAttendingMeetingDeleted); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
    
  }

}
