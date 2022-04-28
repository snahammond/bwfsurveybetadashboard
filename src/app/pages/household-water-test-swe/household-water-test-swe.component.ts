import { Component, OnInit } from '@angular/core';
import { deleteHouseholdWaterTestSWE, getColilertTestResultDescription, getHouseholdWaterTestSWE, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-household-water-test-swe',
  templateUrl: './household-water-test-swe.component.html',
  styleUrls: ['./household-water-test-swe.component.scss']
})
export class HouseholdWaterTestSweComponent implements OnInit {

  householdWaterTestsSWE: any = [];

  constructor(private api: APIService) { 
    getHouseholdWaterTestSWE(this.api)
      .then((householdWaterTestFromUtils)=>{     
        this.householdWaterTestsSWE = householdWaterTestFromUtils;
        console.log("done loading householdWaterTestsSWE "+ this.householdWaterTestsSWE.length);            
      })
      .catch(e=>{
          console.log("error could not load householdWaterTestsSWE", e);
      }); 
  }

  ngOnInit(): void {
    
  }

  removingRow(event){    
    console.log(event.data);
    let householdWaterTestSWEToDelete = event.data;

    deleteHouseholdWaterTestSWE(this.api, householdWaterTestSWEToDelete.id, householdWaterTestSWEToDelete._version)
      .then((householdWaterTestSWEDeleted)=>{
        
        console.log("done deleting household water test swe "+ householdWaterTestSWEDeleted); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
  }

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }


}
