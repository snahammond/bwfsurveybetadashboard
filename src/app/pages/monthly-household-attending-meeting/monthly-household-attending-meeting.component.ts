import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { getMonthlyHouseholdAttendingMeeting } from 'src/app/shared/data-utilities';
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
  monthlyHouseholdAttendingMeeting;
  

  constructor(private api: APIService) {
  }

  monthlyHouseholdAttendingMeetingDataSource: DataSource;
  ngAfterViewInit() {
    console.log("this.key "+this.meetingId)
    getMonthlyHouseholdAttendingMeeting(this.api,this.meetingId)
      .then((monthlyHouseholdAttendingMeeting)=>{     
        this.monthlyHouseholdAttendingMeeting = monthlyHouseholdAttendingMeeting;
        console.log("done loading monthlyHouseholdAttendingMeeting "+ this.monthlyHouseholdAttendingMeeting.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyHouseholdAttendingMeeting", e);
      });
  }
  

}
