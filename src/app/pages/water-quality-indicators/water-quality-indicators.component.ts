import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { convertColilertTestResult, convertPetrifilmTestResult, getCommunityWaterTestWithCommFilter, getCountriesAndCommunities, getSWEAndVolunteerHouseholdWaterTestWithCommFilter, WaterIndicatorReport } from 'src/app/shared/data-utilities';
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
  groupedFilterCommWaterTest: any = {};
  waterIndicatorReportFromFilteredCommWaterTest: any = [];

  filteredHouseholdWaterTest: any = [];
  groupedFilterHouseholdWaterTest: any = {};
  waterIndicatorReportFromFilteredHouseholdWaterTest: any = [];


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
      this.filteredHouseholdWaterTest = [];

      //get month1, month3, month6, month9, month12
      let month1: Date = new Date(this.selectedUserStartDateValue.toDateString());
      let month3: Date = new Date(this.selectedUserStartDateValue.toDateString());
      month3.setMonth(month1.getMonth()+2);
      let month6 = new Date(this.selectedUserStartDateValue.toDateString());
      month6.setMonth(month1.getMonth()+5);
      let month9 = new Date(this.selectedUserStartDateValue.toDateString());
      month9.setMonth(month1.getMonth()+8);
      let month12 = new Date(this.selectedUserStartDateValue.toDateString());         
      month12.setMonth(month1.getMonth()+11);

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

          //group by CommunityWaterLocation name
          this.filteredCommWaterTest.forEach(aFilteredcommWaterTest => {            
            if (!this.groupedFilterCommWaterTest.hasOwnProperty(aFilteredcommWaterTest.CommunityWaterLocation)) {              
              this.groupedFilterCommWaterTest[aFilteredcommWaterTest.CommunityWaterLocation] = [];
            }
            this.groupedFilterCommWaterTest[aFilteredcommWaterTest.CommunityWaterLocation].push(aFilteredcommWaterTest);
          });          

          //make CommunityWaterLocation report data
          this.waterIndicatorReportFromFilteredCommWaterTest=[];
          for (let key of Object.keys(this.groupedFilterCommWaterTest)) {
            //this is the name of the community water test location            
            let communityWaterTestLocation = key;

            //this is an array of all water test for the community location
            let groupedFilteredCommWaterTests = this.groupedFilterCommWaterTest[key];            
            
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
              AverageCombinedScoreMonth1: convertColilertTestResult(month1CommunityWaterTest) + convertPetrifilmTestResult(month1CommunityWaterTest),
              AverageCombinedScoreMonth6: convertColilertTestResult(month6CommunityWaterTest) + convertPetrifilmTestResult(month6CommunityWaterTest),
              AverageCombinedScoreMonth12: convertColilertTestResult(month12CommunityWaterTest) + convertPetrifilmTestResult(month12CommunityWaterTest),
            };
            this.waterIndicatorReportFromFilteredCommWaterTest.push(aWaterIndicatorReport);
            
          }         
         
          
        })
        .catch(e=>{
            console.log("error could not load getCommunityWaterTestWithCommFilter", e);
        }); 

      //get all household(volunteers/SWEs) water for all the communities selected
      getSWEAndVolunteerHouseholdWaterTestWithCommFilter(this.api,selectCommunityNames)
        .then((sweAndVolunteerhouseholdWaterTests)=>{ 
          console.log(sweAndVolunteerhouseholdWaterTests);
          //filter with selected start and end dates
          sweAndVolunteerhouseholdWaterTests.forEach(householdWaterTest => {          
            let householdWaterTestDate: Date = new Date(householdWaterTest.date);  
            if(householdWaterTestDate>=this.selectedUserStartDateValue && householdWaterTestDate < this.selectedUserEndDateValue){
              this.filteredHouseholdWaterTest.push(householdWaterTest);
            }                   
          });
          console.log(this.filteredHouseholdWaterTest);

          //group by HeadHouseholdName 
          this.filteredHouseholdWaterTest.forEach(aFilteredHouseholdWaterTest => {            
            if (!this.groupedFilterHouseholdWaterTest.hasOwnProperty(aFilteredHouseholdWaterTest.HeadHouseholdName)) {              
              this.groupedFilterHouseholdWaterTest[aFilteredHouseholdWaterTest.HeadHouseholdName] = [];
            }
            this.groupedFilterHouseholdWaterTest[aFilteredHouseholdWaterTest.HeadHouseholdName].push(aFilteredHouseholdWaterTest);
          });  
          console.log(this.groupedFilterHouseholdWaterTest);

          //make HeadHouseholdName report data          
          this.waterIndicatorReportFromFilteredHouseholdWaterTest=[];
          for (let key of Object.keys(this.groupedFilterHouseholdWaterTest)) {
            //this is the name of the household water test             
            let householdWaterTestName = key;

            //this is an array of all water test for the community location
            let groupedFilteredHouseholdWaterTests = this.groupedFilterHouseholdWaterTest[key];            
            
            //search for the first month
            let month1HouseholdWaterTest = {};            
            groupedFilteredHouseholdWaterTests.forEach(householdWaterTest => {
              let householdWaterTestDate: Date = new Date(householdWaterTest.date);
              if(householdWaterTestDate>=month1&&householdWaterTestDate<month3){
                month1HouseholdWaterTest = householdWaterTest;
              }
            });

            let month3HouseholdWaterTest = {};            
            groupedFilteredHouseholdWaterTests.forEach(householdWaterTest => {
              let householdWaterTestDate: Date = new Date(householdWaterTest.date);
              if(householdWaterTestDate>=month3&&householdWaterTestDate<month6){
                month3HouseholdWaterTest = householdWaterTest;
              }
            });

            let month6HouseholdWaterTest = {};            
            groupedFilteredHouseholdWaterTests.forEach(householdWaterTest => {
              let householdWaterTestDate: Date = new Date(householdWaterTest.date);
              if(householdWaterTestDate>=month6&&householdWaterTestDate<month9){
                month6HouseholdWaterTest = householdWaterTest;
              }
            });

            let month9HouseholdWaterTest = {};            
            groupedFilteredHouseholdWaterTests.forEach(householdWaterTest => {
              let householdWaterTestDate: Date = new Date(householdWaterTest.date);
              if(householdWaterTestDate>=month9&&householdWaterTestDate<month12){
                month9HouseholdWaterTest = householdWaterTest;
              }
            });

            let month12HouseholdWaterTest = {};            
            groupedFilteredHouseholdWaterTests.forEach(householdWaterTest => {
              let householdWaterTestDate: Date = new Date(householdWaterTest.date);
              if(householdWaterTestDate>=month12&&householdWaterTestDate<this.selectedUserEndDateValue){
                month12HouseholdWaterTest = householdWaterTest;
              }
            });
            
            //create water quality indicator structure
            let aWaterIndicatorReport: WaterIndicatorReport = {
              Name: householdWaterTestName,
              ColilertScoreMonth1: convertColilertTestResult(month1HouseholdWaterTest), 
              ColilertScoreMonth3: convertColilertTestResult(month3HouseholdWaterTest),              
              ColilertScoreMonth6: convertColilertTestResult(month6HouseholdWaterTest), 
              ColilertScoreMonth9: convertColilertTestResult(month9HouseholdWaterTest),
              ColilertScoreMonth12: convertColilertTestResult(month12HouseholdWaterTest),
              PetrifilmScoreMonth1: convertPetrifilmTestResult(month1HouseholdWaterTest),
              PetrifilmScoreMonth3: convertPetrifilmTestResult(month3HouseholdWaterTest),
              PetrifilmScoreMonth6: convertPetrifilmTestResult(month6HouseholdWaterTest),  
              PetrifilmScoreMonth9: convertPetrifilmTestResult(month9HouseholdWaterTest),
              PetrifilmScoreMonth12: convertPetrifilmTestResult(month12HouseholdWaterTest),
              AverageCombinedScoreMonth1: convertColilertTestResult(month1HouseholdWaterTest) + convertPetrifilmTestResult(month1HouseholdWaterTest),
              AverageCombinedScoreMonth3: convertColilertTestResult(month3HouseholdWaterTest) + convertPetrifilmTestResult(month3HouseholdWaterTest),             
              AverageCombinedScoreMonth6: convertColilertTestResult(month6HouseholdWaterTest) + convertPetrifilmTestResult(month6HouseholdWaterTest),
              AverageCombinedScoreMonth9: convertColilertTestResult(month9HouseholdWaterTest) + convertPetrifilmTestResult(month9HouseholdWaterTest),
              AverageCombinedScoreMonth12: convertColilertTestResult(month12HouseholdWaterTest) + convertPetrifilmTestResult(month12HouseholdWaterTest),
            };
            this.waterIndicatorReportFromFilteredHouseholdWaterTest.push(aWaterIndicatorReport);            
          }  
          console.log(this.waterIndicatorReportFromFilteredHouseholdWaterTest);

        })
        .catch(e=>{
            console.log("error could not load getSWEAndVolunteerHouseholdWaterTestWithCommFilter", e);
        }); 

    }else{
      console.log("please select a community")
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

  doNotShowNegativeColilertScoreMonth1(rowData){  
    let result: any = rowData.ColilertScoreMonth1
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeColilertScoreMonth3(rowData){  
    let result: any = rowData.ColilertScoreMonth3
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeColilertScoreMonth6(rowData){  
    let result: any = rowData.ColilertScoreMonth6
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeColilertScoreMonth9(rowData){  
    let result: any = rowData.ColilertScoreMonth9
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeColilertScoreMonth12(rowData){  
    let result: any = rowData.ColilertScoreMonth12
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativePetrifilmScoreMonth1(rowData){  
    let result: any = rowData.PetrifilmScoreMonth1
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativePetrifilmScoreMonth3(rowData){  
    let result: any = rowData.PetrifilmScoreMonth3
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativePetrifilmScoreMonth6(rowData){  
    let result: any = rowData.PetrifilmScoreMonth6
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativePetrifilmScoreMonth9(rowData){  
    let result: any = rowData.PetrifilmScoreMonth9
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativePetrifilmScoreMonth12(rowData){  
    let result: any = rowData.PetrifilmScoreMonth12
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeAverageCombinedScoreMonth1(rowData){  
    let result: any = rowData.AverageCombinedScoreMonth1
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeAverageCombinedScoreMonth3(rowData){  
    let result: any = rowData.AverageCombinedScoreMonth3
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeAverageCombinedScoreMonth6(rowData){  
    let result: any = rowData.AverageCombinedScoreMonth6
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeAverageCombinedScoreMonth9(rowData){  
    let result: any = rowData.AverageCombinedScoreMonth9
    if(result<0){
      result = "";
    }   
    return result;
  }

  doNotShowNegativeAverageCombinedScoreMonth12(rowData){  
    let result: any = rowData.AverageCombinedScoreMonth12
    if(result<0){
      result = "";
    }   
    return result;
  }


  

}
