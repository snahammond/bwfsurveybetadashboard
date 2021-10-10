import { Component, OnInit } from '@angular/core';
import { getColilertTestResultDescription, getHouseholdWaterTestsVol, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-household-water-test-volunteers',
  templateUrl: './household-water-test-volunteers.component.html',
  styleUrls: ['./household-water-test-volunteers.component.scss']
})
export class HouseholdWaterTestVolunteersComponent implements OnInit {

  householdWaterTestsVol: any = [];

  constructor(private api: APIService) {
    getHouseholdWaterTestsVol(this.api)
      .then((hoouseholdWaterTestsVolFromUtils)=>{     
        this.householdWaterTestsVol = hoouseholdWaterTestsVolFromUtils;
        console.log("done loading householdWaterTestsVol "+ this.householdWaterTestsVol.length);            
      })
      .catch(e=>{
          console.log("error could not load householdWaterTestsVol", e);
      }); 
   }

  ngOnInit(): void {
    
  }

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }
}
