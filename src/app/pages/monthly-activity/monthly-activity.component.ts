import { Component, OnInit } from '@angular/core';
import { getSWEMonthlyActivities } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-monthly-activity',
  templateUrl: './monthly-activity.component.html',
  styleUrls: ['./monthly-activity.component.scss']
})
export class MonthlyActivityComponent implements OnInit {

  monthlyActivitiesSWE: any = [];

  constructor(private api: APIService) { 
    getSWEMonthlyActivities(this.api)
      .then((monthlyActivitiesSWEFromUtils)=>{     
        this.monthlyActivitiesSWE = monthlyActivitiesSWEFromUtils;
        console.log("done loading monthlyActivitiesSWE "+ this.monthlyActivitiesSWE.length);            
      })
      .catch(e=>{
          console.log("error could not load monthlyActivitiesSWE", e);
      });
  }

  ngOnInit(): void {
    
  }

}
