import { Component, OnInit } from '@angular/core';
import { deleteCommunityWaterTest, getColilertTestResultDescription, getCommunityWaterTest, getPetrifilmTestResultDescription } from 'src/app/shared/data-utilities';
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
  

  getColilertTestResultDescription(rowData){       
    return getColilertTestResultDescription(rowData);
  }

  getPetrifilmTestResultDescription(rowData){
    return getPetrifilmTestResultDescription(rowData);
  }

}
