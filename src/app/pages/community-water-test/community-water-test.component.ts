import { Component, OnInit } from '@angular/core';
import { addCommunityWaterTest, addHouseholdWaterTestSWE, deleteCommunityWaterTest, getColilertTestResultDescription, getColilertTestResults, getCommunityWaterLocations, getCommunityWaterTest, getCountriesAndCommunities, getPetrifilmTestResultDescription, getPetrifilmTestResults } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-community-water-test',
  templateUrl: './community-water-test.component.html',
  styleUrls: ['./community-water-test.component.scss']
})
export class CommunityWaterTestComponent implements OnInit {

  communityWaterTests: any = [];

  countries = [];
  selectedCountry = null;
  communities = [];
  countriesAndCommunities = [];
  communitiesChanged = false;
  communityWaterLocations = [];
  colilertTestResults = [];
  petrifilmTestResults = [];
  _user = null;

  constructor(private api: APIService,private cookieService: CookieService) { 
    getCommunityWaterTest(this.api)
      .then((communityWaterTestFromUtils)=>{     
        this.communityWaterTests = communityWaterTestFromUtils;
        console.log("done loading communityWaterTests "+ this.communityWaterTests.length);            
      })
      .catch(e=>{
          console.log("error could not load communityWaterTests", e);
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

    getCommunityWaterLocations(this.api)
      .then((communityWaterLocations)=>{          
        this.communityWaterLocations = communityWaterLocations;          
        console.log("done loading communityWaterLocations "+ this.communityWaterLocations.length);            
      })
      .catch(e=>{
          console.log("error could not load communityWaterLocations", e);
      }); 
    
    getColilertTestResults(this.api)
      .then((colilertTestResults)=>{          
        this.colilertTestResults = colilertTestResults;          
        console.log("done loading colilertTestResults "+ this.colilertTestResults.length);            
      })
      .catch(e=>{
          console.log("error could not load colilertTestResults", e);
      });
    
    getPetrifilmTestResults(this.api)
      .then((petrifilmTestResults)=>{          
        this.petrifilmTestResults = petrifilmTestResults;          
        console.log("done loading petrifilmTestResults "+ this.petrifilmTestResults.length);            
      })
      .catch(e=>{
          console.log("error could not load petrifilmTestResults", e);
      });
  }

  ngOnInit(): void {
    
  }

  removingRow(event){    
    console.log(event.data);
    let communityWaterTestToDelete = event.data;

    deleteCommunityWaterTest(this.api, communityWaterTestToDelete.id, communityWaterTestToDelete._version)
      .then((communityWaterTestDeleted)=>{
        
        console.log("done deleting community water test "+ communityWaterTestDeleted); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  removedRow(event){
  }  
  
  addingRow(event){
    
    event.data.id = event.data.__KEY__;
    
    event.data.Country = this.selectedCountry;

    let user_data: string = this.cookieService.get('user');
    if(user_data){           
      this._user = JSON.parse(user_data);

      event.data.Namebwe = this._user.email;  
      event.data.FullNameSwe = this._user.family_name + " " + this._user.given_name;
    }

    event.data.Completed = "1";

    let newCommunityWaterTest = event.data;

    addCommunityWaterTest(this.api, newCommunityWaterTest)
      .then((communityWaterTestAdded)=>{        
        console.log("done adding community water test "+ communityWaterTestAdded); 
      })
      .catch(e=>{
        console.log(e); 
      });
  }

  setCountryAndResetCommunities = (e) =>  {
    this.selectedCountry = e.value;

    while(this.communities.length > 0) {
      this.communities.pop();
    }

    this.communitiesChanged = true;

    for(let countryComm in this.countriesAndCommunities){
      if(this.countriesAndCommunities[countryComm].Country === this.selectedCountry){
         this.communities.push(this.countriesAndCommunities[countryComm].Community);
      }
    }

  };

  redrawCommunities = (e) => {
    if(this.communitiesChanged){
      let communityDatasource = e.component.getDataSource();
      communityDatasource.reload();
      e.component.repaint();
      e.component.reset();
      this.communitiesChanged = false;
    }
  }

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }

}
