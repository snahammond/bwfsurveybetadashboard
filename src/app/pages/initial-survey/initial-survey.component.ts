import { Component, OnInit, ViewChild } from '@angular/core';
import { deleteInitialSurvey, getCausesOfChildrenDeathDescription, getChildrenDiedAfterBeingBornAliveDescription, getCommonIllnessAffectingAllChildrenInHouseholdDescription, getContainerCarryWaterDescription, getDidSickChildrenGoToHospitalDescription, getDidSickChildrenGoToHospitalYesDescription, getFrequencyWaterTreatmentDescription, getHeadHouseholdEducationDescription, getHeadHouseholdMaritalStatusDescription, getHeadHouseholdOccupationDescription, getHeadHouseholdSexDescription, getHealthChangeFamilyInAYearDescription, getHealthChangeInAYearDescription, getHouseholdDefecationMethodDescription, getHouseholdFrequencyAtWaterSourceDescription, getHowDifficultToObtainChlorine, getHowLongUsingWaterTreatmentDescription, getInitialSurvey, getLastTimeTreatedHouseholdWaterWithChlorine, getMainReasonNoWaterTreatmentBeforeDrinkingDescription, getMainSourceDrinkingWaterDescription, getMainSourceOtherPurposeWaterDescription, getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription, getPersonBeingInterviewedDescription, getReasonNoSchoolChildren5_17YearDescription, getRubbishDisposalDescription, getSickChildrenBreastfeedingDescription, getTakingWaterFromStorageDescription, getUsualHouseholdWaterFetcherDescription, getWashedHandsIn24HoursDescription, getWasteDisposalYoungestChildDescription, getWaterStorageAtHomeDescription, getWaterStorageContainerHaveLidDescription, getWaterTreatmentBeforeDrinkingDescription, getWaterTreatmentMethodDescription, getWhatUsedToWashYourHandsDescription, getWhenWashedHandsIn24HoursDescription, getWhereDidYouGetChlorineToTreatHouseholdWater } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';
import { DxDataGridModule, DxDataGridComponent } from "devextreme-angular";


@Component({
  selector: 'app-initial-survey',
  templateUrl: './initial-survey.component.html',
  styleUrls: ['./initial-survey.component.scss']
})
export class InitialSurveyComponent {
  initialSurveys: any = [];  
  
  constructor(private api: APIService) { 
    //this.dataGrid.instance.beginCustomLoading("Loading");
    getInitialSurvey(this.api)
        .then((initialSurveysFromUtils)=>{
          //this.dataGrid.instance.endCustomLoading();
          this.initialSurveys = initialSurveysFromUtils;          
          console.log("done loading loadInitialSurveys "+ this.initialSurveys.length);            
        })
        .catch(e=>{
            //this.dataGrid.instance.endCustomLoading();
            console.log("error could not load loadInitialSurveys", e);
        });   
  }

  ngOnInit() {
  }

  removingRow(event){    
    console.log(event.data);
    deleteInitialSurvey(this.api, event.data.id, event.data._version)
      .then((initialSurveyDeleted)=>{
        console.log("done deleting InitialSurveys "+ initialSurveyDeleted); 
      })
      .catch(e=>{
        console.log( e); 
      });
  }

  removedRow(event){
    
  }

  getHeadHouseholdSexDescription(rowData){       
     return getHeadHouseholdSexDescription(rowData);
  }

  getHeadHouseholdMaritalStatusDescription(rowData){     
   return getHeadHouseholdMaritalStatusDescription(rowData);
  }

  getHeadHouseholdOccupationDescription(rowData){
    return getHeadHouseholdOccupationDescription(rowData);
  }

  getHeadHouseholdEducationDescription(rowData) {    
    return getHeadHouseholdEducationDescription(rowData);
  }

  getPersonBeingInterviewedDescription(rowData){     
   return getPersonBeingInterviewedDescription(rowData);
  }

  getReasonNoSchoolChildren5_17YearDescription(rowData){  
   return getReasonNoSchoolChildren5_17YearDescription(rowData);    
  }

  getMainSourceDrinkingWaterDescription(rowData){
   return getMainSourceDrinkingWaterDescription(rowData);
  }

  getMainSourceOtherPurposeWaterDescription(rowData){
   return getMainSourceOtherPurposeWaterDescription(rowData);
  }

  getHouseholdFrequencyAtWaterSourceDescription(rowData){
   return getHouseholdFrequencyAtWaterSourceDescription(rowData);
  }
  
  getUsualHouseholdWaterFetcherDescription(rowData){
   return getUsualHouseholdWaterFetcherDescription(rowData);
  }

  getContainerCarryWaterDescription(rowData){
   return getContainerCarryWaterDescription(rowData);
  }

  getWaterTreatmentBeforeDrinkingDescription(rowData){
   return getWaterTreatmentBeforeDrinkingDescription(rowData);
  }

  getMainReasonNoWaterTreatmentBeforeDrinkingDescription(rowData){
   return getMainReasonNoWaterTreatmentBeforeDrinkingDescription(rowData);
  }

  getWaterTreatmentMethodDescription(rowData){
   return getWaterTreatmentMethodDescription(rowData);
  }

  getHowLongUsingWaterTreatmentDescription(rowData){
   return getHowLongUsingWaterTreatmentDescription(rowData);
  }

  getFrequencyWaterTreatmentDescription(rowData){
   return getFrequencyWaterTreatmentDescription(rowData);
  }

  getWaterStorageAtHomeDescription(rowData){
   return getWaterStorageAtHomeDescription(rowData);
  }

  getWaterStorageContainerHaveLidDescription(rowData){
   return getWaterStorageContainerHaveLidDescription(rowData);
  }

  getTakingWaterFromStorageDescription(rowData){
    return getTakingWaterFromStorageDescription(rowData);
  }

  getRubbishDisposalDescription(rowData){
   return getRubbishDisposalDescription(rowData);
  }

  getHouseholdDefecationMethodDescription(rowData){
    return getHouseholdDefecationMethodDescription(rowData);
  }

  getWasteDisposalYoungestChildDescription(rowData){
    return getWasteDisposalYoungestChildDescription(rowData);
  }

  getWashedHandsIn24HoursDescription(rowData){
   return getWashedHandsIn24HoursDescription(rowData);
  }

  getWhenWashedHandsIn24HoursDescription(rowData){
    return getWhenWashedHandsIn24HoursDescription(rowData);
  }

  getWhatUsedToWashYourHandsDescription(rowData){
    return getWhatUsedToWashYourHandsDescription(rowData);
  }

  getCommonIllnessAffectingAllChildrenInHouseholdDescription(rowData){
    return getCommonIllnessAffectingAllChildrenInHouseholdDescription(rowData);
  }

  getDidSickChildrenGoToHospitalDescription(rowData){     
   return getDidSickChildrenGoToHospitalDescription(rowData);

  }

  getDidSickChildrenGoToHospitalYesDescription(rowData){
    return getDidSickChildrenGoToHospitalYesDescription(rowData);
  }

  getSickChildrenBreastfeedingDescription(rowData){
    return getSickChildrenBreastfeedingDescription(rowData);
  }

  getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription(rowData){
    return getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription(rowData);
  }

  getHealthChangeInAYearDescription(rowData){
    return getHealthChangeInAYearDescription(rowData);
  }

  getHealthChangeFamilyInAYearDescription(rowData){
    return getHealthChangeFamilyInAYearDescription(rowData);
  }

  getChildrenDiedAfterBeingBornAliveDescription(rowData){
    return getChildrenDiedAfterBeingBornAliveDescription(rowData);
  }

  getCausesOfChildrenDeathDescription(rowData){
   return getCausesOfChildrenDeathDescription(rowData);
  }

  getLastTimeTreatedHouseholdWaterWithChlorine(rowData){
    return getLastTimeTreatedHouseholdWaterWithChlorine(rowData);
  }

  getWhereDidYouGetChlorineToTreatHouseholdWater(rowData){
    return getWhereDidYouGetChlorineToTreatHouseholdWater(rowData);
  }

  getHowDifficultToObtainChlorine(rowData){
    return getHowDifficultToObtainChlorine(rowData);
  }

}
