import { Component, OnInit } from '@angular/core';
import { deleteFollowUpSurvey, getBenefitSWPDescription, getCausesOfChildrenDeathDescription, getChildrenDiedAfterBeingBornAliveDescription, getCommonIllnessAffectingAllChildrenInHouseholdDescription, getContainerCarryWaterDescription, getDidSickChildrenGoToHospitalDescription, getDidSickChildrenGoToHospitalYesDescription, getFrequencyWaterTreatmentDescription, getHeadHouseholdEducationDescription, getHeadHouseholdMaritalStatusDescription, getHeadHouseholdOccupationDescription, getHeadHouseholdSexDescription, getHealthChangeFamilyInAYearDescription, getHealthChangeInAYearDescription, getHouseholdDefecationMethodDescription, getHouseholdFrequencyAtWaterSourceDescription, getHowDifficultToObtainChlorine, getHowLongUsingWaterTreatmentDescription, getInitialSurvey, getLastTimeTreatedHouseholdWaterWithChlorine, getMainReasonNoWaterTreatmentBeforeDrinkingDescription, getMainSourceDrinkingWaterDescription, getMainSourceOtherPurposeWaterDescription, getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription, getPersonBeingInterviewedDescription, getReasonNoSchoolChildren5_17YearDescription, getRubbishDisposalDescription, getSickChildrenBreastfeedingDescription, getTakingWaterFromStorageDescription, getUsualHouseholdWaterFetcherDescription, getWashedHandsIn24HoursDescription, getWasteDisposalYoungestChildDescription, getWaterStorageAtHomeDescription, getWaterStorageContainerHaveLidDescription, getWaterTreatmentBeforeDrinkingDescription, getWaterTreatmentMethodDescription, getWhatUsedToWashYourHandsDescription, getWhenWashedHandsIn24HoursDescription, getWhereDidYouGetChlorineToTreatHouseholdWater } from 'src/app/shared/data-utilities';
import { getFollowupSurvey } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-follow-up-survey',
  templateUrl: './follow-up-survey.component.html',
  styleUrls: ['./follow-up-survey.component.scss']
})
export class FollowUpSurveyComponent implements OnInit {

  followupSurveys: any = [];

  constructor(private api: APIService) { 
    getFollowupSurvey(this.api)
      .then((followupSurveysFromUtils)=>{     
        this.followupSurveys = followupSurveysFromUtils;
        console.log("done loading followupSurveys "+ this.followupSurveys.length);            
      })
      .catch(e=>{
          console.log("error could not load followupSurveys", e);
      }); 
  }

  ngOnInit() {
    
  }

  removingRow(event){    
    console.log(event.data);
    let followUpSurveyToDelete = event.data;

    deleteFollowUpSurvey(this.api, followUpSurveyToDelete.id, followUpSurveyToDelete._version)
      .then((followUpSurveyDeleted)=>{
        
        console.log("done deleting Follow up survey "+ followUpSurveyDeleted); 
      })
      .catch(e=>{
        console.log(e); 
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

 getBenefitSWPDescription(rowData){
   return getBenefitSWPDescription(rowData)
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
