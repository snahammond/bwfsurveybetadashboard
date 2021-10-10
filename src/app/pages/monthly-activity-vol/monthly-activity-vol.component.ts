import { Component, OnInit } from '@angular/core';
import { getVolMonthlyActivities } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-monthly-activity-vol',
  templateUrl: './monthly-activity-vol.component.html',
  styleUrls: ['./monthly-activity-vol.component.scss']
})
export class MonthlyActivityVolComponent implements OnInit {

  monthlyActivitiesVol: any = [];

  constructor(private api: APIService) {
    getVolMonthlyActivities(this.api)
      .then((monthlyActivitiesVolFromUtils)=>{     
        this.monthlyActivitiesVol = monthlyActivitiesVolFromUtils;
        console.log("done loading monthlyActivitiesVol "+ this.monthlyActivitiesVol.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyActivitiesVol", e);
      });
   }

  ngOnInit(): void {
    
  }

}
