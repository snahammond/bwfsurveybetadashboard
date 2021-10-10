import { Component, OnInit } from '@angular/core';
import { getColilertTestResultDescription, getCommunityWaterTest, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-community-water-test',
  templateUrl: './community-water-test.component.html',
  styleUrls: ['./community-water-test.component.scss']
})
export class CommunityWaterTestComponent implements OnInit {

  communityWaterTests: any = [];

  constructor(private api: APIService) { 
    getCommunityWaterTest(this.api)
      .then((communityWaterTestFromUtils)=>{     
        this.communityWaterTests = communityWaterTestFromUtils;
        console.log("done loading communityWaterTests "+ this.communityWaterTests.length);            
      })
      .catch(e=>{
          console.log("error could not load communityWaterTests", e);
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
