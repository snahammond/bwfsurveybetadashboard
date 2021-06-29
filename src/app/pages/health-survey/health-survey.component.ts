import { Component, OnInit } from '@angular/core';
import { getBenefitSWPDescription, getCausesOfChildrenDeathDescription, getChildrenDiedAfterBeingBornAliveDescription, getCommonIllnessAffectingAllChildrenInHouseholdDescription, getContainerCarryWaterDescription, getDidSickChildrenGoToHospitalDescription, getDidSickChildrenGoToHospitalYesDescription, getFrequencyWaterTreatmentDescription, getHeadHouseholdEducationDescription, getHeadHouseholdMaritalStatusDescription, getHeadHouseholdOccupationDescription, getHeadHouseholdSexDescription, getHealthChangeFamilyInAYearDescription, getHealthChangeInAYearDescription, getHouseholdDefecationMethodDescription, getHouseholdFrequencyAtWaterSourceDescription, getHowDifficultToObtainChlorine, getHowLongUsingWaterTreatmentDescription, getInitialSurvey, getLastTimeTreatedHouseholdWaterWithChlorine, getMainReasonNoWaterTreatment24HourDescription, getMainReasonNoWaterTreatmentBeforeDrinkingDescription, getMainSourceDrinkingWaterDescription, getMainSourceOtherPurposeWaterDescription, getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription, getPersonBeingInterviewedDescription, getReasonNoSchoolChildren5_17YearDescription, getRubbishDisposalDescription, getSickChildrenBreastfeedingDescription, getTakingWaterFromStorageDescription, getUsualHouseholdWaterFetcherDescription, getWashedHandsIn24HoursDescription, getWasteDisposalYoungestChildDescription, getWaterStorageAtHomeDescription, getWaterStorageContainerHaveLidDescription, getWaterTreatment24HourMethodDescription, getWaterTreatment24HoursDescription, getWaterTreatmentBeforeDrinkingDescription, getWaterTreatmentMethodDescription, getWhatUsedToWashYourHandsDescription, getWhenWashedHandsIn24HoursDescription, getWhereDidYouGetChlorineToTreatHouseholdWater } from 'src/app/shared/data-utilities';
import { getHealthSurveys } from 'src/app/shared/data-utilities';
import { APIService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-health-survey',
  templateUrl: './health-survey.component.html',
  styleUrls: ['./health-survey.component.scss']
})
export class HealthSurveyComponent implements OnInit {

  healthSurveys: any = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    getHealthSurveys(this.api)
      .then((healthSurveysFromUtils)=>{     
        this.healthSurveys = healthSurveysFromUtils;
        console.log("done loading healthSurveys "+ this.healthSurveys.length);            
      })
      .catch(e=>{
          console.log("error could not load healthSurveys", e);
      }); 
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

 getWaterTreatment24HoursDescription(rowData){
  return getWaterTreatment24HoursDescription(rowData); 
 }

 getMainReasonNoWaterTreatment24HourDescription(rowData){
   return getMainReasonNoWaterTreatment24HourDescription(rowData)
 }

 getWaterTreatment24HourMethodDescription(rowData){
   return getWaterTreatment24HourMethodDescription(rowData);
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
