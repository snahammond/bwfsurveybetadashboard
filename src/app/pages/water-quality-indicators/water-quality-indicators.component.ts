import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { APIService } from 'src/app/shared/services/api.service';
import { WaterQualityFilter } from 'src/app/shared/WaterQualityFilter';


@Component({
  selector: 'app-water-quality-indicators',
  templateUrl: './water-quality-indicators.component.html',
  styleUrls: ['./water-quality-indicators.component.scss']
})
export class WaterQualityIndicatorsComponent implements OnInit {
  
  gridDataSource: any=[{ID:1,Country:"Ghana",Community:"Osu"},
                      {ID:2,Country:"Ghana",Community:"Labadi"},
                      {ID:3,Country:"Ghana",Community:"Teshie"},
                      {ID:4,Country:"Nigeria",Community:"Aba"},
                      {ID:5,Country:"Nigeria",Community:"Benin"},
                      {ID:6,Country:"Nigeria",Community:"Lagos"}];
  gridBoxValue: any = [];

  CountryAndCommunityValueChanged = function(e){
    console.log(e.value);
  }

  click = function(e){
    console.log(this.gridBoxValue);
  }.bind(this);

  DefaultCountries = [];
  DefaultCommunities = [];

  constructor(private api: APIService) {    
  }

  ngOnInit(): void {
    //create empty object
    
    
    
        
  }

  

}
