import { Component, OnInit } from '@angular/core';
import { deleteHouseholdWaterTestSWE, getColilertTestResultDescription, getCountriesAndCommunities, getHeadHouseholdNames, getHouseholdWaterTestSWE, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-household-water-test-swe',
  templateUrl: './household-water-test-swe.component.html',
  styleUrls: ['./household-water-test-swe.component.scss']
})
export class HouseholdWaterTestSweComponent implements OnInit {

  householdWaterTestsSWE: any = [];
  countries = [];
  communities = [];
  countriesAndCommunities = [];
  communitiesChanged = false;
  headHouseholdNames = [];
  colilertTestResults = [];
  petrifilmTestResults = [];
  chlorineTestResults = [];

  constructor(private api: APIService) { 
    getHouseholdWaterTestSWE(this.api)
      .then((householdWaterTestFromUtils)=>{     
        this.householdWaterTestsSWE = householdWaterTestFromUtils;
        console.log("done loading householdWaterTestsSWE "+ this.householdWaterTestsSWE.length);            
      })
      .catch(e=>{
          console.log("error could not load householdWaterTestsSWE", e);
      });

    getCountriesAndCommunities(this.api)
      .then((gridDataSourceCountriesComm)=>{
        for (let entry of gridDataSourceCountriesComm) {
          if(entry.desc&&entry.childvalue){
            let country = entry.desc; 
            this.countries.push(country);
            let subStringComm = entry.childvalue.replace(/["\[\]]/g,'');
            let arrayComm = subStringComm.split(",");   
            let idCounter = 0;        
            for(let comm of arrayComm){
              idCounter = idCounter+1;
              let obj = {ID:idCounter,Country:country,Community:comm}            
              this.countriesAndCommunities.push(obj);
            } 
          }          
        }   
        console.log(this.countriesAndCommunities);          
      })
      .catch(e=>{
        console.log("error could not load countries and communities", e);
      });

      getHeadHouseholdNames(this.api)
        .then((headHouseholdNames)=>{          
          this.headHouseholdNames = headHouseholdNames;          
          console.log("done loading headHouseholdNames "+ this.headHouseholdNames.length);            
        })
        .catch(e=>{
            console.log("error could not load headHouseholdNames", e);
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

  resetCommunities = (e) =>  {

    while(this.communities.length > 0) {
      this.communities.pop();
    }

    this.communitiesChanged = true;

    for(let countryComm in this.countriesAndCommunities){
      if(this.countriesAndCommunities[countryComm].Country === e.value){
         this.communities.push(this.countriesAndCommunities[countryComm].Community);
      }
    }

  };

  redrawCommunities = (e) => {
    if(this.communitiesChanged){
      let communityDatasource = e.component.getDataSource();
      communityDatasource.reload();
      e.component.repaint();
    }
    this.communitiesChanged = false;
  }

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }


}


