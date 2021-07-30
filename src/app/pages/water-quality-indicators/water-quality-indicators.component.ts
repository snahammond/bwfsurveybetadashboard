import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { getCommunityWaterTestWithCommFilter, getCountriesAndCommunities } from 'src/app/shared/data-utilities';
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

  click = function(e){   
    //get filtered as empty
    this.filteredCommWaterTest = [];

    //get the community name of the ids into an array 
    var selectCommunityNames: any= [];  
    this.gridIdCountryCommValue.forEach(idOfSelectedComm => {
      this.gridCountryCommDataSource.forEach(countryComm => {
        if(countryComm.ID==idOfSelectedComm)
        selectCommunityNames.push(countryComm.Community);
      });
    });
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
        //create water quality indicator structure
      })
      .catch(e=>{
          console.log("error could not load communityWaterTestWithCommFIlter", e);
      }); 
    
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
