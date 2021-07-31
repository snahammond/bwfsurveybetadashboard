import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { convertColilertTestResult, convertPetrifilmTestResult, getCommunityWaterTestWithCommFilter, getCountriesAndCommunities, WaterIndicatorReport } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';
import { WaterQualityFilter } from 'src/app/shared/WaterQualityFilter';



@Component({
  selector: 'app-water-quality-indicators',
  templateUrl: './water-quality-indicators.component.html',
  styleUrls: ['./water-quality-indicators.component.scss']
})
export class WaterQualityIndicatorsComponent implements OnInit {
  
  gridCountryCommDataSource: any=[];
  gridIdCountryCommValue: any = [];
  
  startValue: Date = new Date(new Date().getFullYear() - 1, 0, 1);
  endValue: Date = new Date(new Date().getFullYear() + 1, 11, 1);
  defaultSelectedStartValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  defaultSelectedEndValue: Date = new Date(new Date().getFullYear() + 1, new Date().getMonth(), 1);

  selectedUserStartDateValue = null;
  selectedUserEndDateValue = null;

  filteredCommWaterTest: any = [];
  groupedFilterCommWaterTest: any= {};

  click = function(e){   
    

    //get the community name of the ids into an array 
    var selectCommunityNames: any= [];  
    this.gridIdCountryCommValue.forEach(idOfSelectedComm => {
      this.gridCountryCommDataSource.forEach(countryComm => {
        if(countryComm.ID==idOfSelectedComm)
        selectCommunityNames.push(countryComm.Community);
      });
    });

    if(selectCommunityNames.length>0){
      //get filtered as empty
      this.filteredCommWaterTest = [];

      console.log(selectCommunityNames);
      console.log(this.selectedUserStartDateValue);
      console.log(this.selectedUserEndDateValue);
      //get all the community water test for all the communities selected    
      getCommunityWaterTestWithCommFilter(this.api,selectCommunityNames)
        .then((communityWaterTestWithCommFIlter)=>{     
          //filter with selected start and end dates
          communityWaterTestWithCommFIlter.forEach(commWaterTest => {          
              let commWaterTestDate: Date = new Date(commWaterTest.date);  
              if(commWaterTestDate>=this.selectedUserStartDateValue && commWaterTestDate < this.selectedUserEndDateValue){
                this.filteredCommWaterTest.push(commWaterTest);
              }                   
          });
          console.log(this.filteredCommWaterTest);

          //group by CommunityWaterLocation name
          this.filteredCommWaterTest.forEach(aFilteredcommWaterTest => {            
            if (!this.groupedFilterCommWaterTest.hasOwnProperty(aFilteredcommWaterTest.CommunityWaterLocation)) {              
              this.groupedFilterCommWaterTest[aFilteredcommWaterTest.CommunityWaterLocation] = [];
            }
            this.groupedFilterCommWaterTest[aFilteredcommWaterTest.CommunityWaterLocation].push(aFilteredcommWaterTest);
          });
          console.log(this.groupedFilterCommWaterTest);

          //make CommunityWaterLocation report data
          for (let key of Object.keys(this.groupedFilterCommWaterTest)) {
            //this is the name of the community water test location
            console.log("Name "+key);
            let communityWaterTestLocation = key;

            //this is an array of all water test for the community location
            let groupedFilteredCommWaterTests = this.groupedFilterCommWaterTest[key];            
            //get month1, month3, month6, month9, month12
            let month1 = this.selectedUserStartDateValue;
            let month3 = this.selectedUserStartDateValue.setMonth(month1.getMonth()+2);
            let month6 = this.selectedUserStartDateValue.setMonth(month1.getMonth()+5);
            let month9 = this.selectedUserStartDateValue.setMonth(month1.getMonth()+8);
            let month12 = this.selectedUserStartDateValue.setMonth(month1.getMonth()+11);
            
            //search for the first month
            let month1CommunityWaterTest = {};            
            groupedFilteredCommWaterTests.forEach(commWaterTest => {
              let commWaterTestDate: Date = new Date(commWaterTest.date);
              if(commWaterTestDate>=month1&&commWaterTestDate<month3){
                month1CommunityWaterTest = commWaterTest;
              }
            });

            let month3CommunityWaterTest = {};            
            groupedFilteredCommWaterTests.forEach(commWaterTest => {
              let commWaterTestDate: Date = new Date(commWaterTest.date);
              if(commWaterTestDate>=month3&&commWaterTestDate<month6){
                month3CommunityWaterTest = commWaterTest;
              }
            });

            let month6CommunityWaterTest = {};            
            groupedFilteredCommWaterTests.forEach(commWaterTest => {
              let commWaterTestDate: Date = new Date(commWaterTest.date);
              if(commWaterTestDate>=month6&&commWaterTestDate<month9){
                month6CommunityWaterTest = commWaterTest;
              }
            });

            let month9CommunityWaterTest = {};            
            groupedFilteredCommWaterTests.forEach(commWaterTest => {
              let commWaterTestDate: Date = new Date(commWaterTest.date);
              if(commWaterTestDate>=month9&&commWaterTestDate<month12){
                month9CommunityWaterTest = commWaterTest;
              }
            });

            let month12CommunityWaterTest = {};            
            groupedFilteredCommWaterTests.forEach(commWaterTest => {
              let commWaterTestDate: Date = new Date(commWaterTest.date);
              if(commWaterTestDate>=month12&&commWaterTestDate<this.selectedUserEndDateValue){
                month12CommunityWaterTest = commWaterTest;
              }
            });
            
            //create water quality indicator structure
            let aWaterIndicatorReport: WaterIndicatorReport = {
              Name: communityWaterTestLocation,
              ColilertScoreMonth1: convertColilertTestResult(month1CommunityWaterTest),              
              ColilertScoreMonth6: convertColilertTestResult(month6CommunityWaterTest),              
              ColilertScoreMonth12: convertColilertTestResult(month12CommunityWaterTest),
              PetrifilmScoreMonth1: convertPetrifilmTestResult(month1CommunityWaterTest),
              PetrifilmScoreMonth6: convertPetrifilmTestResult(month6CommunityWaterTest),              
              PetrifilmScoreMonth12: convertPetrifilmTestResult(month12CommunityWaterTest),
            };
            
          }
         
          
        })
        .catch(e=>{
            console.log("error could not load communityWaterTestWithCommFilter", e);
        }); 
    }
    
    
  }.bind(this);

  onDateParamValueChanged(e) {
    this.selectedUserStartDateValue = e.value[0];
    this.selectedUserEndDateValue = e.value[1];
  }

  constructor(private api: APIService) {    
    this.selectedUserStartDateValue = this.defaultSelectedStartValue;
    this.selectedUserEndDateValue = this.defaultSelectedEndValue;
  }

  ngOnInit(): void {
    //create empty object
      let idCounter = 0;
      getCountriesAndCommunities(this.api)
          .then((gridDataSourceCountriesComm)=>{
            for (let entry of gridDataSourceCountriesComm) {
              if(entry.desc&&entry.childvalue){
                let country = entry.desc; 
                let subStringComm = entry.childvalue.replace(/["\[\]]/g,'');
                let arrayComm = subStringComm.split(",");          
                for(let comm of arrayComm){
                  idCounter = idCounter+1;
                  let obj = {ID:idCounter,Country:country,Community:comm}            
                  this.gridCountryCommDataSource.push(obj);
                } 
              }          
            } 
            console.log(this.gridCountryCommDataSource);                 
          })
          .catch(e=>{
            console.log("error could not load gridDataSource", e);
          });
    
  }

  

}
