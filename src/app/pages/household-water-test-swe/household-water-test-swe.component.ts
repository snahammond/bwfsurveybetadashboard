import { Component, OnInit } from '@angular/core';
import { getColilertTestResultDescription, getHouseholdWaterTestSWE, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-household-water-test-swe',
  templateUrl: './household-water-test-swe.component.html',
  styleUrls: ['./household-water-test-swe.component.scss']
})
export class HouseholdWaterTestSweComponent implements OnInit {

  householdWaterTestsSWE: any = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    getHouseholdWaterTestSWE(this.api)
      .then((householdWaterTestFromUtils)=>{     
        this.householdWaterTestsSWE = householdWaterTestFromUtils;
        console.log("done loading householdWaterTestsSWE "+ this.householdWaterTestsSWE.length);            
      })
      .catch(e=>{
          console.log("error could not load householdWaterTestsSWE", e);
      }); 
  }

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }


}
