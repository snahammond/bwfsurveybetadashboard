/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateInitialSurveyInput = {
  id?: string | null;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date?: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version?: number | null;
};

export type ModelInitialSurveyConditionInput = {
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HeadHouseholdPhoneNumber?: ModelStringInput | null;
  HeadHouseholdSex?: ModelStringInput | null;
  HeadHouseholdMaritalStatus?: ModelStringInput | null;
  HeadHouseholdAge?: ModelIntInput | null;
  HeadHouseholdOccupation?: ModelStringInput | null;
  HeadHouseholdEducation?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  TotalNoPeopleHousehold?: ModelIntInput | null;
  NoHouseholdMale0_1Year?: ModelIntInput | null;
  NoHouseholdFemale0_1Year?: ModelIntInput | null;
  NoHouseholdMale1_5Year?: ModelIntInput | null;
  NoHouseholdFemale1_5Year?: ModelIntInput | null;
  NoHouseholdMale5_12Year?: ModelIntInput | null;
  NoHouseholdFemale5_12Year?: ModelIntInput | null;
  NoHouseholdMale13_17Year?: ModelIntInput | null;
  NoHouseholdFemale13_17Year?: ModelIntInput | null;
  NoHouseholdMale18_Year?: ModelIntInput | null;
  NoHouseholdFemale18_Year?: ModelIntInput | null;
  ReasonNoSchoolChildren5_17Year?: ModelStringInput | null;
  MainSourceDrinkingWater?: ModelStringInput | null;
  MainSourceOtherPurposeWater?: ModelStringInput | null;
  TimeToWaterSourceGetReturn?: ModelIntInput | null;
  HouseholdFrequencyAtWaterSource?: ModelStringInput | null;
  UsualHouseholdWaterFetcher?: ModelStringInput | null;
  ContainerCarryWater?: ModelStringInput | null;
  WaterTreatmentBeforeDrinking?: ModelStringInput | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: ModelStringInput | null;
  WaterTreatmentMethod?: ModelStringInput | null;
  HowLongUsingWaterTreatment?: ModelStringInput | null;
  FrequencyWaterTreatment?: ModelStringInput | null;
  WaterStorageAtHome?: ModelStringInput | null;
  WaterStorageContainerHaveLid?: ModelStringInput | null;
  TakingWaterFromStorage?: ModelStringInput | null;
  RubbishDisposal?: ModelStringInput | null;
  HouseholdDefecationMethod?: ModelStringInput | null;
  WasteDisposalYoungestChild?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  CommonIllnessAffectingAllChildrenInHousehold?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  HealthChangeInAYear?: ModelStringInput | null;
  HealthChangeFamilyInAYear?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  ChildrenDiedAfterBeingBornAlive?: ModelStringInput | null;
  CausesOfChildrenDeath?: ModelStringInput | null;
  and?: Array<ModelInitialSurveyConditionInput | null> | null;
  or?: Array<ModelInitialSurveyConditionInput | null> | null;
  not?: ModelInitialSurveyConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateInitialSurveyInput = {
  id: string;
  Namebwe?: string | null;
  Country?: string | null;
  Community?: string | null;
  SurveyId?: number | null;
  date?: string | null;
  HeadHouseholdName?: string | null;
  HeadHouseholdPhoneNumber?: string | null;
  HeadHouseholdSex?: string | null;
  HeadHouseholdMaritalStatus?: string | null;
  HeadHouseholdAge?: number | null;
  HeadHouseholdOccupation?: string | null;
  HeadHouseholdEducation?: string | null;
  PersonBeingInterviewed?: string | null;
  TotalNoPeopleHousehold?: number | null;
  NoHouseholdMale0_1Year?: number | null;
  NoHouseholdFemale0_1Year?: number | null;
  NoHouseholdMale1_5Year?: number | null;
  NoHouseholdFemale1_5Year?: number | null;
  NoHouseholdMale5_12Year?: number | null;
  NoHouseholdFemale5_12Year?: number | null;
  NoHouseholdMale13_17Year?: number | null;
  NoHouseholdFemale13_17Year?: number | null;
  NoHouseholdMale18_Year?: number | null;
  NoHouseholdFemale18_Year?: number | null;
  ReasonNoSchoolChildren5_17Year?: string | null;
  MainSourceDrinkingWater?: string | null;
  MainSourceOtherPurposeWater?: string | null;
  TimeToWaterSourceGetReturn?: number | null;
  HouseholdFrequencyAtWaterSource?: string | null;
  UsualHouseholdWaterFetcher?: string | null;
  ContainerCarryWater?: string | null;
  WaterTreatmentBeforeDrinking?: string | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: string | null;
  WaterTreatmentMethod?: string | null;
  HowLongUsingWaterTreatment?: string | null;
  FrequencyWaterTreatment?: string | null;
  WaterStorageAtHome?: string | null;
  WaterStorageContainerHaveLid?: string | null;
  TakingWaterFromStorage?: string | null;
  RubbishDisposal?: string | null;
  HouseholdDefecationMethod?: string | null;
  WasteDisposalYoungestChild?: string | null;
  WashedHandsIn24Hours?: string | null;
  WhenWashedHandsIn24Hours?: string | null;
  WhatUsedToWashYourHands?: string | null;
  CommonIllnessAffectingAllChildrenInHousehold?: string | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: number | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: number | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: number | null;
  DidSickChildrenGoToHospital?: string | null;
  DidSickChildrenGoToHospitalYes?: string | null;
  SickChildrenBreastfeeding?: string | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: string | null;
  NoDaysNoWorkBecauseOfOwnIllness?: number | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: number | null;
  MoneySpentMedicalTreatmentLast4weeks?: number | null;
  HealthChangeInAYear?: string | null;
  HealthChangeFamilyInAYear?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  ChildrenDiedAfterBeingBornAlive?: string | null;
  CausesOfChildrenDeath?: string | null;
  _version?: number | null;
};

export type DeleteInitialSurveyInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateFollowUpSurveyInput = {
  id?: string | null;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date?: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelFollowUpSurveyConditionInput = {
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  MainSourceDrinkingWater?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  WaterTreatmentBeforeDrinking?: ModelStringInput | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: ModelStringInput | null;
  WaterTreatmentMethod?: ModelStringInput | null;
  HowLongUsingWaterTreatment?: ModelStringInput | null;
  FrequencyWaterTreatment?: ModelStringInput | null;
  WaterStorageAtHome?: ModelStringInput | null;
  WaterStorageContainerHaveLid?: ModelStringInput | null;
  TakingWaterFromStorage?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  CommonIllnessAffectingAllChildrenInHousehold?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  HealthChangeInAYear?: ModelStringInput | null;
  HealthChangeFamilyInAYear?: ModelStringInput | null;
  BenefitSWP?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelFollowUpSurveyConditionInput | null> | null;
  or?: Array<ModelFollowUpSurveyConditionInput | null> | null;
  not?: ModelFollowUpSurveyConditionInput | null;
};

export type UpdateFollowUpSurveyInput = {
  id: string;
  Namebwe?: string | null;
  Country?: string | null;
  Community?: string | null;
  SurveyId?: number | null;
  date?: string | null;
  HeadHouseholdName?: string | null;
  MainSourceDrinkingWater?: string | null;
  PersonBeingInterviewed?: string | null;
  WaterTreatmentBeforeDrinking?: string | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: string | null;
  WaterTreatmentMethod?: string | null;
  HowLongUsingWaterTreatment?: string | null;
  FrequencyWaterTreatment?: string | null;
  WaterStorageAtHome?: string | null;
  WaterStorageContainerHaveLid?: string | null;
  TakingWaterFromStorage?: string | null;
  WashedHandsIn24Hours?: string | null;
  WhenWashedHandsIn24Hours?: string | null;
  WhatUsedToWashYourHands?: string | null;
  CommonIllnessAffectingAllChildrenInHousehold?: string | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: number | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: number | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: number | null;
  DidSickChildrenGoToHospital?: string | null;
  DidSickChildrenGoToHospitalYes?: string | null;
  SickChildrenBreastfeeding?: string | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: string | null;
  NoDaysNoWorkBecauseOfOwnIllness?: number | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: number | null;
  MoneySpentMedicalTreatmentLast4weeks?: number | null;
  HealthChangeInAYear?: string | null;
  HealthChangeFamilyInAYear?: string | null;
  BenefitSWP?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteFollowUpSurveyInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateHealthCheckSurveyInput = {
  id?: string | null;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date?: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelHealthCheckSurveyConditionInput = {
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  WasteDisposalYoungestChild?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  WaterTreatment24Hours?: ModelStringInput | null;
  MainReasonNoWaterTreatment24Hour?: ModelStringInput | null;
  WaterTreatment24HourMethod?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelHealthCheckSurveyConditionInput | null> | null;
  or?: Array<ModelHealthCheckSurveyConditionInput | null> | null;
  not?: ModelHealthCheckSurveyConditionInput | null;
};

export type UpdateHealthCheckSurveyInput = {
  id: string;
  Namebwe?: string | null;
  Country?: string | null;
  Community?: string | null;
  SurveyId?: number | null;
  date?: string | null;
  HeadHouseholdName?: string | null;
  PersonBeingInterviewed?: string | null;
  WasteDisposalYoungestChild?: string | null;
  WashedHandsIn24Hours?: string | null;
  WhenWashedHandsIn24Hours?: string | null;
  WhatUsedToWashYourHands?: string | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: number | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: number | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: number | null;
  DidSickChildrenGoToHospital?: string | null;
  DidSickChildrenGoToHospitalYes?: string | null;
  SickChildrenBreastfeeding?: string | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: string | null;
  NoDaysNoWorkBecauseOfOwnIllness?: number | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: number | null;
  MoneySpentMedicalTreatmentLast4weeks?: number | null;
  WaterTreatment24Hours?: string | null;
  MainReasonNoWaterTreatment24Hour?: string | null;
  WaterTreatment24HourMethod?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteHealthCheckSurveyInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateSWEMonthlySummaryInput = {
  id?: string | null;
  Namebwe: string;
  date?: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelSWEMonthlySummaryConditionInput = {
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  SWEPosition?: ModelStringInput | null;
  NoWaterSampleTaken?: ModelIntInput | null;
  NoSurveysCompleted?: ModelIntInput | null;
  NoHealthCheck?: ModelIntInput | null;
  NoLsn1Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson1?: ModelIntInput | null;
  NoLsn2Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson2?: ModelIntInput | null;
  NoLsn3Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson3?: ModelIntInput | null;
  NoLsn4Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson4?: ModelIntInput | null;
  NoPersonsTaught?: ModelIntInput | null;
  NoHouseholdReceivingChlorineSupplies?: ModelIntInput | null;
  NoLiquidChlorineDistributed?: ModelIntInput | null;
  NoChlorineTabletsDistributed?: ModelIntInput | null;
  NoWaterStorageContainersDistributed?: ModelIntInput | null;
  NoSchoolVisits?: ModelIntInput | null;
  NoPublicServiceMessagesAired?: ModelIntInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelSWEMonthlySummaryConditionInput | null> | null;
  or?: Array<ModelSWEMonthlySummaryConditionInput | null> | null;
  not?: ModelSWEMonthlySummaryConditionInput | null;
};

export type UpdateSWEMonthlySummaryInput = {
  id: string;
  Namebwe?: string | null;
  date?: string | null;
  SWEPosition?: string | null;
  NoWaterSampleTaken?: number | null;
  NoSurveysCompleted?: number | null;
  NoHealthCheck?: number | null;
  NoLsn1Taught?: number | null;
  NoPersonsTaughtLesson1?: number | null;
  NoLsn2Taught?: number | null;
  NoPersonsTaughtLesson2?: number | null;
  NoLsn3Taught?: number | null;
  NoPersonsTaughtLesson3?: number | null;
  NoLsn4Taught?: number | null;
  NoPersonsTaughtLesson4?: number | null;
  NoPersonsTaught?: number | null;
  NoHouseholdReceivingChlorineSupplies?: number | null;
  NoLiquidChlorineDistributed?: number | null;
  NoChlorineTabletsDistributed?: number | null;
  NoWaterStorageContainersDistributed?: number | null;
  NoSchoolVisits?: number | null;
  NoPublicServiceMessagesAired?: number | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteSWEMonthlySummaryInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateHouseholdWaterTestInput = {
  id?: string | null;
  Namebwe: string;
  date?: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelHouseholdWaterTestConditionInput = {
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelHouseholdWaterTestConditionInput | null> | null;
  or?: Array<ModelHouseholdWaterTestConditionInput | null> | null;
  not?: ModelHouseholdWaterTestConditionInput | null;
};

export type UpdateHouseholdWaterTestInput = {
  id: string;
  Namebwe?: string | null;
  date?: string | null;
  Country?: string | null;
  Community?: string | null;
  HeadHouseholdName?: string | null;
  ColilertDateTested?: string | null;
  ColilertDateRead?: string | null;
  ColilertTestResult?: string | null;
  PetrifilmDateTested?: string | null;
  PetrifilmDateRead?: string | null;
  PetrifilmTestResult?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteHouseholdWaterTestInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateCommunityWaterTestInput = {
  id?: string | null;
  Namebwe: string;
  date?: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelCommunityWaterTestConditionInput = {
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  CommunityWaterLocation?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelCommunityWaterTestConditionInput | null> | null;
  or?: Array<ModelCommunityWaterTestConditionInput | null> | null;
  not?: ModelCommunityWaterTestConditionInput | null;
};

export type UpdateCommunityWaterTestInput = {
  id: string;
  Namebwe?: string | null;
  date?: string | null;
  Country?: string | null;
  Community?: string | null;
  CommunityWaterLocation?: string | null;
  ColilertDateTested?: string | null;
  ColilertDateRead?: string | null;
  ColilertTestResult?: string | null;
  PetrifilmDateTested?: string | null;
  PetrifilmDateRead?: string | null;
  PetrifilmTestResult?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteCommunityWaterTestInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateCommunityWaterInput = {
  id?: string | null;
  Namebwe: string;
  date?: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelCommunityWaterConditionInput = {
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  CommunityWaterLocation?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelCommunityWaterConditionInput | null> | null;
  or?: Array<ModelCommunityWaterConditionInput | null> | null;
  not?: ModelCommunityWaterConditionInput | null;
};

export type UpdateCommunityWaterInput = {
  id: string;
  Namebwe?: string | null;
  date?: string | null;
  Country?: string | null;
  Community?: string | null;
  CommunityWaterLocation?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteCommunityWaterInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateConfigDefinitionsInput = {
  id?: string | null;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version?: number | null;
};

export type ModelConfigDefinitionsConditionInput = {
  type?: ModelStringInput | null;
  name?: ModelStringInput | null;
  value?: ModelStringInput | null;
  desc?: ModelStringInput | null;
  childname?: ModelStringInput | null;
  childvalue?: ModelStringInput | null;
  childdesc?: ModelStringInput | null;
  parentname?: ModelStringInput | null;
  parentvalue?: ModelStringInput | null;
  parentdesc?: ModelStringInput | null;
  and?: Array<ModelConfigDefinitionsConditionInput | null> | null;
  or?: Array<ModelConfigDefinitionsConditionInput | null> | null;
  not?: ModelConfigDefinitionsConditionInput | null;
};

export type UpdateConfigDefinitionsInput = {
  id: string;
  type?: string | null;
  name?: string | null;
  value?: string | null;
  desc?: string | null;
  childname?: string | null;
  childvalue?: string | null;
  childdesc?: string | null;
  parentname?: string | null;
  parentvalue?: string | null;
  parentdesc?: string | null;
  _version?: number | null;
};

export type DeleteConfigDefinitionsInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateBWFSURVEYTOTALSInput = {
  id?: string | null;
  surveyName: string;
  total: number;
  _version?: number | null;
};

export type ModelBWFSURVEYTOTALSConditionInput = {
  surveyName?: ModelStringInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelBWFSURVEYTOTALSConditionInput | null> | null;
  or?: Array<ModelBWFSURVEYTOTALSConditionInput | null> | null;
  not?: ModelBWFSURVEYTOTALSConditionInput | null;
};

export type UpdateBWFSURVEYTOTALSInput = {
  surveyName?: string | null;
  total?: number | null;
  _version?: number | null;
};

export type DeleteBWFSURVEYTOTALSInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateVolunteerHouseholdWaterTestInput = {
  id?: string | null;
  Namebwe: string;
  Namevol: string;
  date?: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelVolunteerHouseholdWaterTestConditionInput = {
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HouseholdLocation?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerHouseholdWaterTestConditionInput | null> | null;
  or?: Array<ModelVolunteerHouseholdWaterTestConditionInput | null> | null;
  not?: ModelVolunteerHouseholdWaterTestConditionInput | null;
};

export type UpdateVolunteerHouseholdWaterTestInput = {
  id: string;
  Namebwe?: string | null;
  Namevol?: string | null;
  date?: string | null;
  Country?: string | null;
  Community?: string | null;
  HeadHouseholdName?: string | null;
  HouseholdLocation?: string | null;
  ColilertDateTested?: string | null;
  ColilertDateRead?: string | null;
  ColilertTestResult?: string | null;
  PetrifilmDateTested?: string | null;
  PetrifilmDateRead?: string | null;
  PetrifilmTestResult?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteVolunteerHouseholdWaterTestInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateVolunteerHouseholdInput = {
  id?: string | null;
  Namebwe: string;
  Namevol: string;
  date?: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelVolunteerHouseholdConditionInput = {
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HouseholdLocation?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerHouseholdConditionInput | null> | null;
  or?: Array<ModelVolunteerHouseholdConditionInput | null> | null;
  not?: ModelVolunteerHouseholdConditionInput | null;
};

export type UpdateVolunteerHouseholdInput = {
  id: string;
  Namebwe?: string | null;
  Namevol?: string | null;
  date?: string | null;
  Country?: string | null;
  Community?: string | null;
  HeadHouseholdName?: string | null;
  HouseholdLocation?: string | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteVolunteerHouseholdInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateVolunteerInput = {
  id?: string | null;
  Namebwe: string;
  Namevol: string;
  _version?: number | null;
};

export type ModelVolunteerConditionInput = {
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  and?: Array<ModelVolunteerConditionInput | null> | null;
  or?: Array<ModelVolunteerConditionInput | null> | null;
  not?: ModelVolunteerConditionInput | null;
};

export type UpdateVolunteerInput = {
  id: string;
  Namebwe?: string | null;
  Namevol?: string | null;
  _version?: number | null;
};

export type DeleteVolunteerInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateVolunteerMonthlySummaryInput = {
  id?: string | null;
  Namebwe: string;
  Namevol: string;
  date?: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version?: number | null;
};

export type ModelVolunteerMonthlySummaryConditionInput = {
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  NoWaterSampleTaken?: ModelIntInput | null;
  NoLsn1TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn1TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson1ByVol?: ModelIntInput | null;
  NoLsn2TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn2TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson2ByVol?: ModelIntInput | null;
  NoLsn3TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn3TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson3ByVol?: ModelIntInput | null;
  NoLsn4TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn4TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson4ByVol?: ModelIntInput | null;
  NoPersonsTaughtByVol?: ModelIntInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerMonthlySummaryConditionInput | null> | null;
  or?: Array<ModelVolunteerMonthlySummaryConditionInput | null> | null;
  not?: ModelVolunteerMonthlySummaryConditionInput | null;
};

export type UpdateVolunteerMonthlySummaryInput = {
  id: string;
  Namebwe?: string | null;
  Namevol?: string | null;
  date?: string | null;
  NoWaterSampleTaken?: number | null;
  NoLsn1TaughtAsPrimaryInstr?: number | null;
  NoLsn1TaughtAssistingSWE?: number | null;
  NoPersonsTaughtLesson1ByVol?: number | null;
  NoLsn2TaughtAsPrimaryInstr?: number | null;
  NoLsn2TaughtAssistingSWE?: number | null;
  NoPersonsTaughtLesson2ByVol?: number | null;
  NoLsn3TaughtAsPrimaryInstr?: number | null;
  NoLsn3TaughtAssistingSWE?: number | null;
  NoPersonsTaughtLesson3ByVol?: number | null;
  NoLsn4TaughtAsPrimaryInstr?: number | null;
  NoLsn4TaughtAssistingSWE?: number | null;
  NoPersonsTaughtLesson4ByVol?: number | null;
  NoPersonsTaughtByVol?: number | null;
  Completed?: number | null;
  Lat?: string | null;
  Lng?: string | null;
  _version?: number | null;
};

export type DeleteVolunteerMonthlySummaryInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelInitialSurveyFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HeadHouseholdPhoneNumber?: ModelStringInput | null;
  HeadHouseholdSex?: ModelStringInput | null;
  HeadHouseholdMaritalStatus?: ModelStringInput | null;
  HeadHouseholdAge?: ModelIntInput | null;
  HeadHouseholdOccupation?: ModelStringInput | null;
  HeadHouseholdEducation?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  TotalNoPeopleHousehold?: ModelIntInput | null;
  NoHouseholdMale0_1Year?: ModelIntInput | null;
  NoHouseholdFemale0_1Year?: ModelIntInput | null;
  NoHouseholdMale1_5Year?: ModelIntInput | null;
  NoHouseholdFemale1_5Year?: ModelIntInput | null;
  NoHouseholdMale5_12Year?: ModelIntInput | null;
  NoHouseholdFemale5_12Year?: ModelIntInput | null;
  NoHouseholdMale13_17Year?: ModelIntInput | null;
  NoHouseholdFemale13_17Year?: ModelIntInput | null;
  NoHouseholdMale18_Year?: ModelIntInput | null;
  NoHouseholdFemale18_Year?: ModelIntInput | null;
  ReasonNoSchoolChildren5_17Year?: ModelStringInput | null;
  MainSourceDrinkingWater?: ModelStringInput | null;
  MainSourceOtherPurposeWater?: ModelStringInput | null;
  TimeToWaterSourceGetReturn?: ModelIntInput | null;
  HouseholdFrequencyAtWaterSource?: ModelStringInput | null;
  UsualHouseholdWaterFetcher?: ModelStringInput | null;
  ContainerCarryWater?: ModelStringInput | null;
  WaterTreatmentBeforeDrinking?: ModelStringInput | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: ModelStringInput | null;
  WaterTreatmentMethod?: ModelStringInput | null;
  HowLongUsingWaterTreatment?: ModelStringInput | null;
  FrequencyWaterTreatment?: ModelStringInput | null;
  WaterStorageAtHome?: ModelStringInput | null;
  WaterStorageContainerHaveLid?: ModelStringInput | null;
  TakingWaterFromStorage?: ModelStringInput | null;
  RubbishDisposal?: ModelStringInput | null;
  HouseholdDefecationMethod?: ModelStringInput | null;
  WasteDisposalYoungestChild?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  CommonIllnessAffectingAllChildrenInHousehold?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  HealthChangeInAYear?: ModelStringInput | null;
  HealthChangeFamilyInAYear?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  ChildrenDiedAfterBeingBornAlive?: ModelStringInput | null;
  CausesOfChildrenDeath?: ModelStringInput | null;
  and?: Array<ModelInitialSurveyFilterInput | null> | null;
  or?: Array<ModelInitialSurveyFilterInput | null> | null;
  not?: ModelInitialSurveyFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFollowUpSurveyFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  MainSourceDrinkingWater?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  WaterTreatmentBeforeDrinking?: ModelStringInput | null;
  MainReasonNoWaterTreatmentBeforeDrinking?: ModelStringInput | null;
  WaterTreatmentMethod?: ModelStringInput | null;
  HowLongUsingWaterTreatment?: ModelStringInput | null;
  FrequencyWaterTreatment?: ModelStringInput | null;
  WaterStorageAtHome?: ModelStringInput | null;
  WaterStorageContainerHaveLid?: ModelStringInput | null;
  TakingWaterFromStorage?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  CommonIllnessAffectingAllChildrenInHousehold?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  HealthChangeInAYear?: ModelStringInput | null;
  HealthChangeFamilyInAYear?: ModelStringInput | null;
  BenefitSWP?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelFollowUpSurveyFilterInput | null> | null;
  or?: Array<ModelFollowUpSurveyFilterInput | null> | null;
  not?: ModelFollowUpSurveyFilterInput | null;
};

export type ModelHealthCheckSurveyFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  SurveyId?: ModelIntInput | null;
  date?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  PersonBeingInterviewed?: ModelStringInput | null;
  WasteDisposalYoungestChild?: ModelStringInput | null;
  WashedHandsIn24Hours?: ModelStringInput | null;
  WhenWashedHandsIn24Hours?: ModelStringInput | null;
  WhatUsedToWashYourHands?: ModelStringInput | null;
  NoChildrenWithVomitingOrDiarrheaIn14days?: ModelIntInput | null;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek?: ModelIntInput | null;
  NoChildrenWithVomitingOrDiarrheaIn7days?: ModelIntInput | null;
  DidSickChildrenGoToHospital?: ModelStringInput | null;
  DidSickChildrenGoToHospitalYes?: ModelStringInput | null;
  SickChildrenBreastfeeding?: ModelStringInput | null;
  OutcomeMostRecentVomiting_DiarrheaAtHospital?: ModelStringInput | null;
  NoDaysNoWorkBecauseOfOwnIllness?: ModelIntInput | null;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers?: ModelIntInput | null;
  MoneySpentMedicalTreatmentLast4weeks?: ModelIntInput | null;
  WaterTreatment24Hours?: ModelStringInput | null;
  MainReasonNoWaterTreatment24Hour?: ModelStringInput | null;
  WaterTreatment24HourMethod?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelHealthCheckSurveyFilterInput | null> | null;
  or?: Array<ModelHealthCheckSurveyFilterInput | null> | null;
  not?: ModelHealthCheckSurveyFilterInput | null;
};

export type ModelSWEMonthlySummaryFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  SWEPosition?: ModelStringInput | null;
  NoWaterSampleTaken?: ModelIntInput | null;
  NoSurveysCompleted?: ModelIntInput | null;
  NoHealthCheck?: ModelIntInput | null;
  NoLsn1Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson1?: ModelIntInput | null;
  NoLsn2Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson2?: ModelIntInput | null;
  NoLsn3Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson3?: ModelIntInput | null;
  NoLsn4Taught?: ModelIntInput | null;
  NoPersonsTaughtLesson4?: ModelIntInput | null;
  NoPersonsTaught?: ModelIntInput | null;
  NoHouseholdReceivingChlorineSupplies?: ModelIntInput | null;
  NoLiquidChlorineDistributed?: ModelIntInput | null;
  NoChlorineTabletsDistributed?: ModelIntInput | null;
  NoWaterStorageContainersDistributed?: ModelIntInput | null;
  NoSchoolVisits?: ModelIntInput | null;
  NoPublicServiceMessagesAired?: ModelIntInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelSWEMonthlySummaryFilterInput | null> | null;
  or?: Array<ModelSWEMonthlySummaryFilterInput | null> | null;
  not?: ModelSWEMonthlySummaryFilterInput | null;
};

export type ModelHouseholdWaterTestFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelHouseholdWaterTestFilterInput | null> | null;
  or?: Array<ModelHouseholdWaterTestFilterInput | null> | null;
  not?: ModelHouseholdWaterTestFilterInput | null;
};

export type ModelCommunityWaterTestFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  CommunityWaterLocation?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelCommunityWaterTestFilterInput | null> | null;
  or?: Array<ModelCommunityWaterTestFilterInput | null> | null;
  not?: ModelCommunityWaterTestFilterInput | null;
};

export type ModelCommunityWaterFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  CommunityWaterLocation?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelCommunityWaterFilterInput | null> | null;
  or?: Array<ModelCommunityWaterFilterInput | null> | null;
  not?: ModelCommunityWaterFilterInput | null;
};

export type ModelConfigDefinitionsFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  name?: ModelStringInput | null;
  value?: ModelStringInput | null;
  desc?: ModelStringInput | null;
  childname?: ModelStringInput | null;
  childvalue?: ModelStringInput | null;
  childdesc?: ModelStringInput | null;
  parentname?: ModelStringInput | null;
  parentvalue?: ModelStringInput | null;
  parentdesc?: ModelStringInput | null;
  and?: Array<ModelConfigDefinitionsFilterInput | null> | null;
  or?: Array<ModelConfigDefinitionsFilterInput | null> | null;
  not?: ModelConfigDefinitionsFilterInput | null;
};

export type ModelBWFSURVEYTOTALSFilterInput = {
  surveyName?: ModelStringInput | null;
  total?: ModelIntInput | null;
  and?: Array<ModelBWFSURVEYTOTALSFilterInput | null> | null;
  or?: Array<ModelBWFSURVEYTOTALSFilterInput | null> | null;
  not?: ModelBWFSURVEYTOTALSFilterInput | null;
};

export type ModelVolunteerHouseholdWaterTestFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HouseholdLocation?: ModelStringInput | null;
  ColilertDateTested?: ModelStringInput | null;
  ColilertDateRead?: ModelStringInput | null;
  ColilertTestResult?: ModelStringInput | null;
  PetrifilmDateTested?: ModelStringInput | null;
  PetrifilmDateRead?: ModelStringInput | null;
  PetrifilmTestResult?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerHouseholdWaterTestFilterInput | null> | null;
  or?: Array<ModelVolunteerHouseholdWaterTestFilterInput | null> | null;
  not?: ModelVolunteerHouseholdWaterTestFilterInput | null;
};

export type ModelVolunteerHouseholdFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  Country?: ModelStringInput | null;
  Community?: ModelStringInput | null;
  HeadHouseholdName?: ModelStringInput | null;
  HouseholdLocation?: ModelStringInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerHouseholdFilterInput | null> | null;
  or?: Array<ModelVolunteerHouseholdFilterInput | null> | null;
  not?: ModelVolunteerHouseholdFilterInput | null;
};

export type ModelVolunteerFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  and?: Array<ModelVolunteerFilterInput | null> | null;
  or?: Array<ModelVolunteerFilterInput | null> | null;
  not?: ModelVolunteerFilterInput | null;
};

export type ModelVolunteerMonthlySummaryFilterInput = {
  id?: ModelIDInput | null;
  Namebwe?: ModelStringInput | null;
  Namevol?: ModelStringInput | null;
  date?: ModelStringInput | null;
  NoWaterSampleTaken?: ModelIntInput | null;
  NoLsn1TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn1TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson1ByVol?: ModelIntInput | null;
  NoLsn2TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn2TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson2ByVol?: ModelIntInput | null;
  NoLsn3TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn3TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson3ByVol?: ModelIntInput | null;
  NoLsn4TaughtAsPrimaryInstr?: ModelIntInput | null;
  NoLsn4TaughtAssistingSWE?: ModelIntInput | null;
  NoPersonsTaughtLesson4ByVol?: ModelIntInput | null;
  NoPersonsTaughtByVol?: ModelIntInput | null;
  Completed?: ModelIntInput | null;
  Lat?: ModelStringInput | null;
  Lng?: ModelStringInput | null;
  and?: Array<ModelVolunteerMonthlySummaryFilterInput | null> | null;
  or?: Array<ModelVolunteerMonthlySummaryFilterInput | null> | null;
  not?: ModelVolunteerMonthlySummaryFilterInput | null;
};

export type CreateInitialSurveyMutation = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInitialSurveyMutation = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInitialSurveyMutation = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateFollowUpSurveyMutation = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateFollowUpSurveyMutation = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteFollowUpSurveyMutation = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateHealthCheckSurveyMutation = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHealthCheckSurveyMutation = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHealthCheckSurveyMutation = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateSweMonthlySummaryMutation = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSweMonthlySummaryMutation = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSweMonthlySummaryMutation = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateHouseholdWaterTestMutation = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHouseholdWaterTestMutation = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHouseholdWaterTestMutation = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommunityWaterTestMutation = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommunityWaterTestMutation = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommunityWaterTestMutation = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateCommunityWaterMutation = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCommunityWaterMutation = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCommunityWaterMutation = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateConfigDefinitionsMutation = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateConfigDefinitionsMutation = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteConfigDefinitionsMutation = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateBwfsurveytotalsMutation = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBwfsurveytotalsMutation = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBwfsurveytotalsMutation = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateVolunteerHouseholdWaterTestMutation = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVolunteerHouseholdWaterTestMutation = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVolunteerHouseholdWaterTestMutation = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateVolunteerHouseholdMutation = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVolunteerHouseholdMutation = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVolunteerHouseholdMutation = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateVolunteerMutation = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVolunteerMutation = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVolunteerMutation = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateVolunteerMonthlySummaryMutation = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVolunteerMonthlySummaryMutation = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVolunteerMonthlySummaryMutation = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type SyncInitialSurveysQuery = {
  __typename: "ModelInitialSurveyConnection";
  items: Array<{
    __typename: "InitialSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    HeadHouseholdPhoneNumber: string;
    HeadHouseholdSex: string;
    HeadHouseholdMaritalStatus: string;
    HeadHouseholdAge: number;
    HeadHouseholdOccupation: string;
    HeadHouseholdEducation: string;
    PersonBeingInterviewed: string;
    TotalNoPeopleHousehold: number;
    NoHouseholdMale0_1Year: number;
    NoHouseholdFemale0_1Year: number;
    NoHouseholdMale1_5Year: number;
    NoHouseholdFemale1_5Year: number;
    NoHouseholdMale5_12Year: number;
    NoHouseholdFemale5_12Year: number;
    NoHouseholdMale13_17Year: number;
    NoHouseholdFemale13_17Year: number;
    NoHouseholdMale18_Year: number;
    NoHouseholdFemale18_Year: number;
    ReasonNoSchoolChildren5_17Year: string;
    MainSourceDrinkingWater: string;
    MainSourceOtherPurposeWater: string;
    TimeToWaterSourceGetReturn: number;
    HouseholdFrequencyAtWaterSource: string;
    UsualHouseholdWaterFetcher: string;
    ContainerCarryWater: string;
    WaterTreatmentBeforeDrinking: string;
    MainReasonNoWaterTreatmentBeforeDrinking: string;
    WaterTreatmentMethod: string;
    HowLongUsingWaterTreatment: string;
    FrequencyWaterTreatment: string;
    WaterStorageAtHome: string;
    WaterStorageContainerHaveLid: string;
    TakingWaterFromStorage: string;
    RubbishDisposal: string;
    HouseholdDefecationMethod: string;
    WasteDisposalYoungestChild: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    CommonIllnessAffectingAllChildrenInHousehold: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    HealthChangeInAYear: string;
    HealthChangeFamilyInAYear: string;
    Completed: number;
    Lat: string;
    Lng: string;
    ChildrenDiedAfterBeingBornAlive: string;
    CausesOfChildrenDeath: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetInitialSurveyQuery = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListInitialSurveysQuery = {
  __typename: "ModelInitialSurveyConnection";
  items: Array<{
    __typename: "InitialSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    HeadHouseholdPhoneNumber: string;
    HeadHouseholdSex: string;
    HeadHouseholdMaritalStatus: string;
    HeadHouseholdAge: number;
    HeadHouseholdOccupation: string;
    HeadHouseholdEducation: string;
    PersonBeingInterviewed: string;
    TotalNoPeopleHousehold: number;
    NoHouseholdMale0_1Year: number;
    NoHouseholdFemale0_1Year: number;
    NoHouseholdMale1_5Year: number;
    NoHouseholdFemale1_5Year: number;
    NoHouseholdMale5_12Year: number;
    NoHouseholdFemale5_12Year: number;
    NoHouseholdMale13_17Year: number;
    NoHouseholdFemale13_17Year: number;
    NoHouseholdMale18_Year: number;
    NoHouseholdFemale18_Year: number;
    ReasonNoSchoolChildren5_17Year: string;
    MainSourceDrinkingWater: string;
    MainSourceOtherPurposeWater: string;
    TimeToWaterSourceGetReturn: number;
    HouseholdFrequencyAtWaterSource: string;
    UsualHouseholdWaterFetcher: string;
    ContainerCarryWater: string;
    WaterTreatmentBeforeDrinking: string;
    MainReasonNoWaterTreatmentBeforeDrinking: string;
    WaterTreatmentMethod: string;
    HowLongUsingWaterTreatment: string;
    FrequencyWaterTreatment: string;
    WaterStorageAtHome: string;
    WaterStorageContainerHaveLid: string;
    TakingWaterFromStorage: string;
    RubbishDisposal: string;
    HouseholdDefecationMethod: string;
    WasteDisposalYoungestChild: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    CommonIllnessAffectingAllChildrenInHousehold: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    HealthChangeInAYear: string;
    HealthChangeFamilyInAYear: string;
    Completed: number;
    Lat: string;
    Lng: string;
    ChildrenDiedAfterBeingBornAlive: string;
    CausesOfChildrenDeath: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncFollowUpSurveysQuery = {
  __typename: "ModelFollowUpSurveyConnection";
  items: Array<{
    __typename: "FollowUpSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    MainSourceDrinkingWater: string;
    PersonBeingInterviewed: string;
    WaterTreatmentBeforeDrinking: string;
    MainReasonNoWaterTreatmentBeforeDrinking: string;
    WaterTreatmentMethod: string;
    HowLongUsingWaterTreatment: string;
    FrequencyWaterTreatment: string;
    WaterStorageAtHome: string;
    WaterStorageContainerHaveLid: string;
    TakingWaterFromStorage: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    CommonIllnessAffectingAllChildrenInHousehold: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    HealthChangeInAYear: string;
    HealthChangeFamilyInAYear: string;
    BenefitSWP: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetFollowUpSurveyQuery = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListFollowUpSurveysQuery = {
  __typename: "ModelFollowUpSurveyConnection";
  items: Array<{
    __typename: "FollowUpSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    MainSourceDrinkingWater: string;
    PersonBeingInterviewed: string;
    WaterTreatmentBeforeDrinking: string;
    MainReasonNoWaterTreatmentBeforeDrinking: string;
    WaterTreatmentMethod: string;
    HowLongUsingWaterTreatment: string;
    FrequencyWaterTreatment: string;
    WaterStorageAtHome: string;
    WaterStorageContainerHaveLid: string;
    TakingWaterFromStorage: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    CommonIllnessAffectingAllChildrenInHousehold: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    HealthChangeInAYear: string;
    HealthChangeFamilyInAYear: string;
    BenefitSWP: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncHealthCheckSurveysQuery = {
  __typename: "ModelHealthCheckSurveyConnection";
  items: Array<{
    __typename: "HealthCheckSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    PersonBeingInterviewed: string;
    WasteDisposalYoungestChild: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    WaterTreatment24Hours: string;
    MainReasonNoWaterTreatment24Hour: string;
    WaterTreatment24HourMethod: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetHealthCheckSurveyQuery = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListHealthCheckSurveysQuery = {
  __typename: "ModelHealthCheckSurveyConnection";
  items: Array<{
    __typename: "HealthCheckSurvey";
    id: string;
    Namebwe: string;
    Country: string;
    Community: string;
    SurveyId: number;
    date: string | null;
    HeadHouseholdName: string;
    PersonBeingInterviewed: string;
    WasteDisposalYoungestChild: string;
    WashedHandsIn24Hours: string;
    WhenWashedHandsIn24Hours: string;
    WhatUsedToWashYourHands: string;
    NoChildrenWithVomitingOrDiarrheaIn14days: number;
    NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
    NoChildrenWithVomitingOrDiarrheaIn7days: number;
    DidSickChildrenGoToHospital: string;
    DidSickChildrenGoToHospitalYes: string;
    SickChildrenBreastfeeding: string;
    OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
    NoDaysNoWorkBecauseOfOwnIllness: number;
    NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
    MoneySpentMedicalTreatmentLast4weeks: number;
    WaterTreatment24Hours: string;
    MainReasonNoWaterTreatment24Hour: string;
    WaterTreatment24HourMethod: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncSweMonthlySummariesQuery = {
  __typename: "ModelSWEMonthlySummaryConnection";
  items: Array<{
    __typename: "SWEMonthlySummary";
    id: string;
    Namebwe: string;
    date: string | null;
    SWEPosition: string;
    NoWaterSampleTaken: number;
    NoSurveysCompleted: number;
    NoHealthCheck: number;
    NoLsn1Taught: number;
    NoPersonsTaughtLesson1: number;
    NoLsn2Taught: number;
    NoPersonsTaughtLesson2: number;
    NoLsn3Taught: number;
    NoPersonsTaughtLesson3: number;
    NoLsn4Taught: number;
    NoPersonsTaughtLesson4: number;
    NoPersonsTaught: number;
    NoHouseholdReceivingChlorineSupplies: number;
    NoLiquidChlorineDistributed: number;
    NoChlorineTabletsDistributed: number;
    NoWaterStorageContainersDistributed: number;
    NoSchoolVisits: number;
    NoPublicServiceMessagesAired: number;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetSweMonthlySummaryQuery = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListSweMonthlySummarysQuery = {
  __typename: "ModelSWEMonthlySummaryConnection";
  items: Array<{
    __typename: "SWEMonthlySummary";
    id: string;
    Namebwe: string;
    date: string | null;
    SWEPosition: string;
    NoWaterSampleTaken: number;
    NoSurveysCompleted: number;
    NoHealthCheck: number;
    NoLsn1Taught: number;
    NoPersonsTaughtLesson1: number;
    NoLsn2Taught: number;
    NoPersonsTaughtLesson2: number;
    NoLsn3Taught: number;
    NoPersonsTaughtLesson3: number;
    NoLsn4Taught: number;
    NoPersonsTaughtLesson4: number;
    NoPersonsTaught: number;
    NoHouseholdReceivingChlorineSupplies: number;
    NoLiquidChlorineDistributed: number;
    NoChlorineTabletsDistributed: number;
    NoWaterStorageContainersDistributed: number;
    NoSchoolVisits: number;
    NoPublicServiceMessagesAired: number;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncHouseholdWaterTestsQuery = {
  __typename: "ModelHouseholdWaterTestConnection";
  items: Array<{
    __typename: "HouseholdWaterTest";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetHouseholdWaterTestQuery = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListHouseholdWaterTestsQuery = {
  __typename: "ModelHouseholdWaterTestConnection";
  items: Array<{
    __typename: "HouseholdWaterTest";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncCommunityWaterTestsQuery = {
  __typename: "ModelCommunityWaterTestConnection";
  items: Array<{
    __typename: "CommunityWaterTest";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    CommunityWaterLocation: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetCommunityWaterTestQuery = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCommunityWaterTestsQuery = {
  __typename: "ModelCommunityWaterTestConnection";
  items: Array<{
    __typename: "CommunityWaterTest";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    CommunityWaterLocation: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncCommunityWatersQuery = {
  __typename: "ModelCommunityWaterConnection";
  items: Array<{
    __typename: "CommunityWater";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    CommunityWaterLocation: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetCommunityWaterQuery = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListCommunityWatersQuery = {
  __typename: "ModelCommunityWaterConnection";
  items: Array<{
    __typename: "CommunityWater";
    id: string;
    Namebwe: string;
    date: string | null;
    Country: string;
    Community: string;
    CommunityWaterLocation: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncConfigDefinitionsQuery = {
  __typename: "ModelConfigDefinitionsConnection";
  items: Array<{
    __typename: "ConfigDefinitions";
    id: string;
    type: string;
    name: string;
    value: string;
    desc: string;
    childname: string;
    childvalue: string;
    childdesc: string;
    parentname: string;
    parentvalue: string;
    parentdesc: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetConfigDefinitionsQuery = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListConfigDefinitionssQuery = {
  __typename: "ModelConfigDefinitionsConnection";
  items: Array<{
    __typename: "ConfigDefinitions";
    id: string;
    type: string;
    name: string;
    value: string;
    desc: string;
    childname: string;
    childvalue: string;
    childdesc: string;
    parentname: string;
    parentvalue: string;
    parentdesc: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncBwfsurveytotalsQuery = {
  __typename: "ModelBWFSURVEYTOTALSConnection";
  items: Array<{
    __typename: "BWFSURVEYTOTALS";
    id: string;
    surveyName: string;
    total: number;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetBwfsurveytotalsQuery = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListBwfsurveytotalSsQuery = {
  __typename: "ModelBWFSURVEYTOTALSConnection";
  items: Array<{
    __typename: "BWFSURVEYTOTALS";
    id: string;
    surveyName: string;
    total: number;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncVolunteerHouseholdWaterTestsQuery = {
  __typename: "ModelVolunteerHouseholdWaterTestConnection";
  items: Array<{
    __typename: "VolunteerHouseholdWaterTest";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    HouseholdLocation: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetVolunteerHouseholdWaterTestQuery = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListVolunteerHouseholdWaterTestsQuery = {
  __typename: "ModelVolunteerHouseholdWaterTestConnection";
  items: Array<{
    __typename: "VolunteerHouseholdWaterTest";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    HouseholdLocation: string;
    ColilertDateTested: string;
    ColilertDateRead: string;
    ColilertTestResult: string;
    PetrifilmDateTested: string;
    PetrifilmDateRead: string;
    PetrifilmTestResult: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncVolunteerHouseholdsQuery = {
  __typename: "ModelVolunteerHouseholdConnection";
  items: Array<{
    __typename: "VolunteerHousehold";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    HouseholdLocation: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetVolunteerHouseholdQuery = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListVolunteerHouseholdsQuery = {
  __typename: "ModelVolunteerHouseholdConnection";
  items: Array<{
    __typename: "VolunteerHousehold";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    Country: string;
    Community: string;
    HeadHouseholdName: string;
    HouseholdLocation: string;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncVolunteersQuery = {
  __typename: "ModelVolunteerConnection";
  items: Array<{
    __typename: "Volunteer";
    id: string;
    Namebwe: string;
    Namevol: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetVolunteerQuery = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListVolunteersQuery = {
  __typename: "ModelVolunteerConnection";
  items: Array<{
    __typename: "Volunteer";
    id: string;
    Namebwe: string;
    Namevol: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncVolunteerMonthlySummariesQuery = {
  __typename: "ModelVolunteerMonthlySummaryConnection";
  items: Array<{
    __typename: "VolunteerMonthlySummary";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    NoWaterSampleTaken: number;
    NoLsn1TaughtAsPrimaryInstr: number;
    NoLsn1TaughtAssistingSWE: number;
    NoPersonsTaughtLesson1ByVol: number;
    NoLsn2TaughtAsPrimaryInstr: number;
    NoLsn2TaughtAssistingSWE: number;
    NoPersonsTaughtLesson2ByVol: number;
    NoLsn3TaughtAsPrimaryInstr: number;
    NoLsn3TaughtAssistingSWE: number;
    NoPersonsTaughtLesson3ByVol: number;
    NoLsn4TaughtAsPrimaryInstr: number;
    NoLsn4TaughtAssistingSWE: number;
    NoPersonsTaughtLesson4ByVol: number;
    NoPersonsTaughtByVol: number;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetVolunteerMonthlySummaryQuery = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type ListVolunteerMonthlySummarysQuery = {
  __typename: "ModelVolunteerMonthlySummaryConnection";
  items: Array<{
    __typename: "VolunteerMonthlySummary";
    id: string;
    Namebwe: string;
    Namevol: string;
    date: string | null;
    NoWaterSampleTaken: number;
    NoLsn1TaughtAsPrimaryInstr: number;
    NoLsn1TaughtAssistingSWE: number;
    NoPersonsTaughtLesson1ByVol: number;
    NoLsn2TaughtAsPrimaryInstr: number;
    NoLsn2TaughtAssistingSWE: number;
    NoPersonsTaughtLesson2ByVol: number;
    NoLsn3TaughtAsPrimaryInstr: number;
    NoLsn3TaughtAssistingSWE: number;
    NoPersonsTaughtLesson3ByVol: number;
    NoLsn4TaughtAsPrimaryInstr: number;
    NoLsn4TaughtAssistingSWE: number;
    NoPersonsTaughtLesson4ByVol: number;
    NoPersonsTaughtByVol: number;
    Completed: number;
    Lat: string;
    Lng: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateInitialSurveySubscription = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInitialSurveySubscription = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInitialSurveySubscription = {
  __typename: "InitialSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  HeadHouseholdPhoneNumber: string;
  HeadHouseholdSex: string;
  HeadHouseholdMaritalStatus: string;
  HeadHouseholdAge: number;
  HeadHouseholdOccupation: string;
  HeadHouseholdEducation: string;
  PersonBeingInterviewed: string;
  TotalNoPeopleHousehold: number;
  NoHouseholdMale0_1Year: number;
  NoHouseholdFemale0_1Year: number;
  NoHouseholdMale1_5Year: number;
  NoHouseholdFemale1_5Year: number;
  NoHouseholdMale5_12Year: number;
  NoHouseholdFemale5_12Year: number;
  NoHouseholdMale13_17Year: number;
  NoHouseholdFemale13_17Year: number;
  NoHouseholdMale18_Year: number;
  NoHouseholdFemale18_Year: number;
  ReasonNoSchoolChildren5_17Year: string;
  MainSourceDrinkingWater: string;
  MainSourceOtherPurposeWater: string;
  TimeToWaterSourceGetReturn: number;
  HouseholdFrequencyAtWaterSource: string;
  UsualHouseholdWaterFetcher: string;
  ContainerCarryWater: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  RubbishDisposal: string;
  HouseholdDefecationMethod: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  Completed: number;
  Lat: string;
  Lng: string;
  ChildrenDiedAfterBeingBornAlive: string;
  CausesOfChildrenDeath: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFollowUpSurveySubscription = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateFollowUpSurveySubscription = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteFollowUpSurveySubscription = {
  __typename: "FollowUpSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  MainSourceDrinkingWater: string;
  PersonBeingInterviewed: string;
  WaterTreatmentBeforeDrinking: string;
  MainReasonNoWaterTreatmentBeforeDrinking: string;
  WaterTreatmentMethod: string;
  HowLongUsingWaterTreatment: string;
  FrequencyWaterTreatment: string;
  WaterStorageAtHome: string;
  WaterStorageContainerHaveLid: string;
  TakingWaterFromStorage: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  CommonIllnessAffectingAllChildrenInHousehold: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  HealthChangeInAYear: string;
  HealthChangeFamilyInAYear: string;
  BenefitSWP: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHealthCheckSurveySubscription = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHealthCheckSurveySubscription = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHealthCheckSurveySubscription = {
  __typename: "HealthCheckSurvey";
  id: string;
  Namebwe: string;
  Country: string;
  Community: string;
  SurveyId: number;
  date: string | null;
  HeadHouseholdName: string;
  PersonBeingInterviewed: string;
  WasteDisposalYoungestChild: string;
  WashedHandsIn24Hours: string;
  WhenWashedHandsIn24Hours: string;
  WhatUsedToWashYourHands: string;
  NoChildrenWithVomitingOrDiarrheaIn14days: number;
  NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  NoChildrenWithVomitingOrDiarrheaIn7days: number;
  DidSickChildrenGoToHospital: string;
  DidSickChildrenGoToHospitalYes: string;
  SickChildrenBreastfeeding: string;
  OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  NoDaysNoWorkBecauseOfOwnIllness: number;
  NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  MoneySpentMedicalTreatmentLast4weeks: number;
  WaterTreatment24Hours: string;
  MainReasonNoWaterTreatment24Hour: string;
  WaterTreatment24HourMethod: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSweMonthlySummarySubscription = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSweMonthlySummarySubscription = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSweMonthlySummarySubscription = {
  __typename: "SWEMonthlySummary";
  id: string;
  Namebwe: string;
  date: string | null;
  SWEPosition: string;
  NoWaterSampleTaken: number;
  NoSurveysCompleted: number;
  NoHealthCheck: number;
  NoLsn1Taught: number;
  NoPersonsTaughtLesson1: number;
  NoLsn2Taught: number;
  NoPersonsTaughtLesson2: number;
  NoLsn3Taught: number;
  NoPersonsTaughtLesson3: number;
  NoLsn4Taught: number;
  NoPersonsTaughtLesson4: number;
  NoPersonsTaught: number;
  NoHouseholdReceivingChlorineSupplies: number;
  NoLiquidChlorineDistributed: number;
  NoChlorineTabletsDistributed: number;
  NoWaterStorageContainersDistributed: number;
  NoSchoolVisits: number;
  NoPublicServiceMessagesAired: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHouseholdWaterTestSubscription = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHouseholdWaterTestSubscription = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHouseholdWaterTestSubscription = {
  __typename: "HouseholdWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommunityWaterTestSubscription = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommunityWaterTestSubscription = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommunityWaterTestSubscription = {
  __typename: "CommunityWaterTest";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCommunityWaterSubscription = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCommunityWaterSubscription = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCommunityWaterSubscription = {
  __typename: "CommunityWater";
  id: string;
  Namebwe: string;
  date: string | null;
  Country: string;
  Community: string;
  CommunityWaterLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateConfigDefinitionsSubscription = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateConfigDefinitionsSubscription = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteConfigDefinitionsSubscription = {
  __typename: "ConfigDefinitions";
  id: string;
  type: string;
  name: string;
  value: string;
  desc: string;
  childname: string;
  childvalue: string;
  childdesc: string;
  parentname: string;
  parentvalue: string;
  parentdesc: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateBwfsurveytotalsSubscription = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBwfsurveytotalsSubscription = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBwfsurveytotalsSubscription = {
  __typename: "BWFSURVEYTOTALS";
  id: string;
  surveyName: string;
  total: number;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVolunteerHouseholdWaterTestSubscription = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVolunteerHouseholdWaterTestSubscription = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVolunteerHouseholdWaterTestSubscription = {
  __typename: "VolunteerHouseholdWaterTest";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  ColilertDateTested: string;
  ColilertDateRead: string;
  ColilertTestResult: string;
  PetrifilmDateTested: string;
  PetrifilmDateRead: string;
  PetrifilmTestResult: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVolunteerHouseholdSubscription = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVolunteerHouseholdSubscription = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVolunteerHouseholdSubscription = {
  __typename: "VolunteerHousehold";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  Country: string;
  Community: string;
  HeadHouseholdName: string;
  HouseholdLocation: string;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVolunteerSubscription = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVolunteerSubscription = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVolunteerSubscription = {
  __typename: "Volunteer";
  id: string;
  Namebwe: string;
  Namevol: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVolunteerMonthlySummarySubscription = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVolunteerMonthlySummarySubscription = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVolunteerMonthlySummarySubscription = {
  __typename: "VolunteerMonthlySummary";
  id: string;
  Namebwe: string;
  Namevol: string;
  date: string | null;
  NoWaterSampleTaken: number;
  NoLsn1TaughtAsPrimaryInstr: number;
  NoLsn1TaughtAssistingSWE: number;
  NoPersonsTaughtLesson1ByVol: number;
  NoLsn2TaughtAsPrimaryInstr: number;
  NoLsn2TaughtAssistingSWE: number;
  NoPersonsTaughtLesson2ByVol: number;
  NoLsn3TaughtAsPrimaryInstr: number;
  NoLsn3TaughtAssistingSWE: number;
  NoPersonsTaughtLesson3ByVol: number;
  NoLsn4TaughtAsPrimaryInstr: number;
  NoLsn4TaughtAssistingSWE: number;
  NoPersonsTaughtLesson4ByVol: number;
  NoPersonsTaughtByVol: number;
  Completed: number;
  Lat: string;
  Lng: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateInitialSurvey(
    input: CreateInitialSurveyInput,
    condition?: ModelInitialSurveyConditionInput
  ): Promise<CreateInitialSurveyMutation> {
    const statement = `mutation CreateInitialSurvey($input: CreateInitialSurveyInput!, $condition: ModelInitialSurveyConditionInput) {
        createInitialSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateInitialSurveyMutation>response.data.createInitialSurvey;
  }
  async UpdateInitialSurvey(
    input: UpdateInitialSurveyInput,
    condition?: ModelInitialSurveyConditionInput
  ): Promise<UpdateInitialSurveyMutation> {
    const statement = `mutation UpdateInitialSurvey($input: UpdateInitialSurveyInput!, $condition: ModelInitialSurveyConditionInput) {
        updateInitialSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateInitialSurveyMutation>response.data.updateInitialSurvey;
  }
  async DeleteInitialSurvey(
    input: DeleteInitialSurveyInput,
    condition?: ModelInitialSurveyConditionInput
  ): Promise<DeleteInitialSurveyMutation> {
    const statement = `mutation DeleteInitialSurvey($input: DeleteInitialSurveyInput!, $condition: ModelInitialSurveyConditionInput) {
        deleteInitialSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteInitialSurveyMutation>response.data.deleteInitialSurvey;
  }
  async CreateFollowUpSurvey(
    input: CreateFollowUpSurveyInput,
    condition?: ModelFollowUpSurveyConditionInput
  ): Promise<CreateFollowUpSurveyMutation> {
    const statement = `mutation CreateFollowUpSurvey($input: CreateFollowUpSurveyInput!, $condition: ModelFollowUpSurveyConditionInput) {
        createFollowUpSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFollowUpSurveyMutation>response.data.createFollowUpSurvey;
  }
  async UpdateFollowUpSurvey(
    input: UpdateFollowUpSurveyInput,
    condition?: ModelFollowUpSurveyConditionInput
  ): Promise<UpdateFollowUpSurveyMutation> {
    const statement = `mutation UpdateFollowUpSurvey($input: UpdateFollowUpSurveyInput!, $condition: ModelFollowUpSurveyConditionInput) {
        updateFollowUpSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFollowUpSurveyMutation>response.data.updateFollowUpSurvey;
  }
  async DeleteFollowUpSurvey(
    input: DeleteFollowUpSurveyInput,
    condition?: ModelFollowUpSurveyConditionInput
  ): Promise<DeleteFollowUpSurveyMutation> {
    const statement = `mutation DeleteFollowUpSurvey($input: DeleteFollowUpSurveyInput!, $condition: ModelFollowUpSurveyConditionInput) {
        deleteFollowUpSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFollowUpSurveyMutation>response.data.deleteFollowUpSurvey;
  }
  async CreateHealthCheckSurvey(
    input: CreateHealthCheckSurveyInput,
    condition?: ModelHealthCheckSurveyConditionInput
  ): Promise<CreateHealthCheckSurveyMutation> {
    const statement = `mutation CreateHealthCheckSurvey($input: CreateHealthCheckSurveyInput!, $condition: ModelHealthCheckSurveyConditionInput) {
        createHealthCheckSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHealthCheckSurveyMutation>(
      response.data.createHealthCheckSurvey
    );
  }
  async UpdateHealthCheckSurvey(
    input: UpdateHealthCheckSurveyInput,
    condition?: ModelHealthCheckSurveyConditionInput
  ): Promise<UpdateHealthCheckSurveyMutation> {
    const statement = `mutation UpdateHealthCheckSurvey($input: UpdateHealthCheckSurveyInput!, $condition: ModelHealthCheckSurveyConditionInput) {
        updateHealthCheckSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHealthCheckSurveyMutation>(
      response.data.updateHealthCheckSurvey
    );
  }
  async DeleteHealthCheckSurvey(
    input: DeleteHealthCheckSurveyInput,
    condition?: ModelHealthCheckSurveyConditionInput
  ): Promise<DeleteHealthCheckSurveyMutation> {
    const statement = `mutation DeleteHealthCheckSurvey($input: DeleteHealthCheckSurveyInput!, $condition: ModelHealthCheckSurveyConditionInput) {
        deleteHealthCheckSurvey(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHealthCheckSurveyMutation>(
      response.data.deleteHealthCheckSurvey
    );
  }
  async CreateSweMonthlySummary(
    input: CreateSWEMonthlySummaryInput,
    condition?: ModelSWEMonthlySummaryConditionInput
  ): Promise<CreateSweMonthlySummaryMutation> {
    const statement = `mutation CreateSweMonthlySummary($input: CreateSWEMonthlySummaryInput!, $condition: ModelSWEMonthlySummaryConditionInput) {
        createSWEMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSweMonthlySummaryMutation>(
      response.data.createSWEMonthlySummary
    );
  }
  async UpdateSweMonthlySummary(
    input: UpdateSWEMonthlySummaryInput,
    condition?: ModelSWEMonthlySummaryConditionInput
  ): Promise<UpdateSweMonthlySummaryMutation> {
    const statement = `mutation UpdateSweMonthlySummary($input: UpdateSWEMonthlySummaryInput!, $condition: ModelSWEMonthlySummaryConditionInput) {
        updateSWEMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSweMonthlySummaryMutation>(
      response.data.updateSWEMonthlySummary
    );
  }
  async DeleteSweMonthlySummary(
    input: DeleteSWEMonthlySummaryInput,
    condition?: ModelSWEMonthlySummaryConditionInput
  ): Promise<DeleteSweMonthlySummaryMutation> {
    const statement = `mutation DeleteSweMonthlySummary($input: DeleteSWEMonthlySummaryInput!, $condition: ModelSWEMonthlySummaryConditionInput) {
        deleteSWEMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSweMonthlySummaryMutation>(
      response.data.deleteSWEMonthlySummary
    );
  }
  async CreateHouseholdWaterTest(
    input: CreateHouseholdWaterTestInput,
    condition?: ModelHouseholdWaterTestConditionInput
  ): Promise<CreateHouseholdWaterTestMutation> {
    const statement = `mutation CreateHouseholdWaterTest($input: CreateHouseholdWaterTestInput!, $condition: ModelHouseholdWaterTestConditionInput) {
        createHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHouseholdWaterTestMutation>(
      response.data.createHouseholdWaterTest
    );
  }
  async UpdateHouseholdWaterTest(
    input: UpdateHouseholdWaterTestInput,
    condition?: ModelHouseholdWaterTestConditionInput
  ): Promise<UpdateHouseholdWaterTestMutation> {
    const statement = `mutation UpdateHouseholdWaterTest($input: UpdateHouseholdWaterTestInput!, $condition: ModelHouseholdWaterTestConditionInput) {
        updateHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHouseholdWaterTestMutation>(
      response.data.updateHouseholdWaterTest
    );
  }
  async DeleteHouseholdWaterTest(
    input: DeleteHouseholdWaterTestInput,
    condition?: ModelHouseholdWaterTestConditionInput
  ): Promise<DeleteHouseholdWaterTestMutation> {
    const statement = `mutation DeleteHouseholdWaterTest($input: DeleteHouseholdWaterTestInput!, $condition: ModelHouseholdWaterTestConditionInput) {
        deleteHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHouseholdWaterTestMutation>(
      response.data.deleteHouseholdWaterTest
    );
  }
  async CreateCommunityWaterTest(
    input: CreateCommunityWaterTestInput,
    condition?: ModelCommunityWaterTestConditionInput
  ): Promise<CreateCommunityWaterTestMutation> {
    const statement = `mutation CreateCommunityWaterTest($input: CreateCommunityWaterTestInput!, $condition: ModelCommunityWaterTestConditionInput) {
        createCommunityWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommunityWaterTestMutation>(
      response.data.createCommunityWaterTest
    );
  }
  async UpdateCommunityWaterTest(
    input: UpdateCommunityWaterTestInput,
    condition?: ModelCommunityWaterTestConditionInput
  ): Promise<UpdateCommunityWaterTestMutation> {
    const statement = `mutation UpdateCommunityWaterTest($input: UpdateCommunityWaterTestInput!, $condition: ModelCommunityWaterTestConditionInput) {
        updateCommunityWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommunityWaterTestMutation>(
      response.data.updateCommunityWaterTest
    );
  }
  async DeleteCommunityWaterTest(
    input: DeleteCommunityWaterTestInput,
    condition?: ModelCommunityWaterTestConditionInput
  ): Promise<DeleteCommunityWaterTestMutation> {
    const statement = `mutation DeleteCommunityWaterTest($input: DeleteCommunityWaterTestInput!, $condition: ModelCommunityWaterTestConditionInput) {
        deleteCommunityWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommunityWaterTestMutation>(
      response.data.deleteCommunityWaterTest
    );
  }
  async CreateCommunityWater(
    input: CreateCommunityWaterInput,
    condition?: ModelCommunityWaterConditionInput
  ): Promise<CreateCommunityWaterMutation> {
    const statement = `mutation CreateCommunityWater($input: CreateCommunityWaterInput!, $condition: ModelCommunityWaterConditionInput) {
        createCommunityWater(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommunityWaterMutation>response.data.createCommunityWater;
  }
  async UpdateCommunityWater(
    input: UpdateCommunityWaterInput,
    condition?: ModelCommunityWaterConditionInput
  ): Promise<UpdateCommunityWaterMutation> {
    const statement = `mutation UpdateCommunityWater($input: UpdateCommunityWaterInput!, $condition: ModelCommunityWaterConditionInput) {
        updateCommunityWater(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommunityWaterMutation>response.data.updateCommunityWater;
  }
  async DeleteCommunityWater(
    input: DeleteCommunityWaterInput,
    condition?: ModelCommunityWaterConditionInput
  ): Promise<DeleteCommunityWaterMutation> {
    const statement = `mutation DeleteCommunityWater($input: DeleteCommunityWaterInput!, $condition: ModelCommunityWaterConditionInput) {
        deleteCommunityWater(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommunityWaterMutation>response.data.deleteCommunityWater;
  }
  async CreateConfigDefinitions(
    input: CreateConfigDefinitionsInput,
    condition?: ModelConfigDefinitionsConditionInput
  ): Promise<CreateConfigDefinitionsMutation> {
    const statement = `mutation CreateConfigDefinitions($input: CreateConfigDefinitionsInput!, $condition: ModelConfigDefinitionsConditionInput) {
        createConfigDefinitions(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigDefinitionsMutation>(
      response.data.createConfigDefinitions
    );
  }
  async UpdateConfigDefinitions(
    input: UpdateConfigDefinitionsInput,
    condition?: ModelConfigDefinitionsConditionInput
  ): Promise<UpdateConfigDefinitionsMutation> {
    const statement = `mutation UpdateConfigDefinitions($input: UpdateConfigDefinitionsInput!, $condition: ModelConfigDefinitionsConditionInput) {
        updateConfigDefinitions(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigDefinitionsMutation>(
      response.data.updateConfigDefinitions
    );
  }
  async DeleteConfigDefinitions(
    input: DeleteConfigDefinitionsInput,
    condition?: ModelConfigDefinitionsConditionInput
  ): Promise<DeleteConfigDefinitionsMutation> {
    const statement = `mutation DeleteConfigDefinitions($input: DeleteConfigDefinitionsInput!, $condition: ModelConfigDefinitionsConditionInput) {
        deleteConfigDefinitions(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigDefinitionsMutation>(
      response.data.deleteConfigDefinitions
    );
  }
  async CreateBwfsurveytotals(
    input: CreateBWFSURVEYTOTALSInput,
    condition?: ModelBWFSURVEYTOTALSConditionInput
  ): Promise<CreateBwfsurveytotalsMutation> {
    const statement = `mutation CreateBwfsurveytotals($input: CreateBWFSURVEYTOTALSInput!, $condition: ModelBWFSURVEYTOTALSConditionInput) {
        createBWFSURVEYTOTALS(input: $input, condition: $condition) {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBwfsurveytotalsMutation>response.data.createBWFSURVEYTOTALS;
  }
  async UpdateBwfsurveytotals(
    input: UpdateBWFSURVEYTOTALSInput,
    condition?: ModelBWFSURVEYTOTALSConditionInput
  ): Promise<UpdateBwfsurveytotalsMutation> {
    const statement = `mutation UpdateBwfsurveytotals($input: UpdateBWFSURVEYTOTALSInput!, $condition: ModelBWFSURVEYTOTALSConditionInput) {
        updateBWFSURVEYTOTALS(input: $input, condition: $condition) {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBwfsurveytotalsMutation>response.data.updateBWFSURVEYTOTALS;
  }
  async DeleteBwfsurveytotals(
    input: DeleteBWFSURVEYTOTALSInput,
    condition?: ModelBWFSURVEYTOTALSConditionInput
  ): Promise<DeleteBwfsurveytotalsMutation> {
    const statement = `mutation DeleteBwfsurveytotals($input: DeleteBWFSURVEYTOTALSInput!, $condition: ModelBWFSURVEYTOTALSConditionInput) {
        deleteBWFSURVEYTOTALS(input: $input, condition: $condition) {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBwfsurveytotalsMutation>response.data.deleteBWFSURVEYTOTALS;
  }
  async CreateVolunteerHouseholdWaterTest(
    input: CreateVolunteerHouseholdWaterTestInput,
    condition?: ModelVolunteerHouseholdWaterTestConditionInput
  ): Promise<CreateVolunteerHouseholdWaterTestMutation> {
    const statement = `mutation CreateVolunteerHouseholdWaterTest($input: CreateVolunteerHouseholdWaterTestInput!, $condition: ModelVolunteerHouseholdWaterTestConditionInput) {
        createVolunteerHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVolunteerHouseholdWaterTestMutation>(
      response.data.createVolunteerHouseholdWaterTest
    );
  }
  async UpdateVolunteerHouseholdWaterTest(
    input: UpdateVolunteerHouseholdWaterTestInput,
    condition?: ModelVolunteerHouseholdWaterTestConditionInput
  ): Promise<UpdateVolunteerHouseholdWaterTestMutation> {
    const statement = `mutation UpdateVolunteerHouseholdWaterTest($input: UpdateVolunteerHouseholdWaterTestInput!, $condition: ModelVolunteerHouseholdWaterTestConditionInput) {
        updateVolunteerHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVolunteerHouseholdWaterTestMutation>(
      response.data.updateVolunteerHouseholdWaterTest
    );
  }
  async DeleteVolunteerHouseholdWaterTest(
    input: DeleteVolunteerHouseholdWaterTestInput,
    condition?: ModelVolunteerHouseholdWaterTestConditionInput
  ): Promise<DeleteVolunteerHouseholdWaterTestMutation> {
    const statement = `mutation DeleteVolunteerHouseholdWaterTest($input: DeleteVolunteerHouseholdWaterTestInput!, $condition: ModelVolunteerHouseholdWaterTestConditionInput) {
        deleteVolunteerHouseholdWaterTest(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVolunteerHouseholdWaterTestMutation>(
      response.data.deleteVolunteerHouseholdWaterTest
    );
  }
  async CreateVolunteerHousehold(
    input: CreateVolunteerHouseholdInput,
    condition?: ModelVolunteerHouseholdConditionInput
  ): Promise<CreateVolunteerHouseholdMutation> {
    const statement = `mutation CreateVolunteerHousehold($input: CreateVolunteerHouseholdInput!, $condition: ModelVolunteerHouseholdConditionInput) {
        createVolunteerHousehold(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVolunteerHouseholdMutation>(
      response.data.createVolunteerHousehold
    );
  }
  async UpdateVolunteerHousehold(
    input: UpdateVolunteerHouseholdInput,
    condition?: ModelVolunteerHouseholdConditionInput
  ): Promise<UpdateVolunteerHouseholdMutation> {
    const statement = `mutation UpdateVolunteerHousehold($input: UpdateVolunteerHouseholdInput!, $condition: ModelVolunteerHouseholdConditionInput) {
        updateVolunteerHousehold(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVolunteerHouseholdMutation>(
      response.data.updateVolunteerHousehold
    );
  }
  async DeleteVolunteerHousehold(
    input: DeleteVolunteerHouseholdInput,
    condition?: ModelVolunteerHouseholdConditionInput
  ): Promise<DeleteVolunteerHouseholdMutation> {
    const statement = `mutation DeleteVolunteerHousehold($input: DeleteVolunteerHouseholdInput!, $condition: ModelVolunteerHouseholdConditionInput) {
        deleteVolunteerHousehold(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVolunteerHouseholdMutation>(
      response.data.deleteVolunteerHousehold
    );
  }
  async CreateVolunteer(
    input: CreateVolunteerInput,
    condition?: ModelVolunteerConditionInput
  ): Promise<CreateVolunteerMutation> {
    const statement = `mutation CreateVolunteer($input: CreateVolunteerInput!, $condition: ModelVolunteerConditionInput) {
        createVolunteer(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVolunteerMutation>response.data.createVolunteer;
  }
  async UpdateVolunteer(
    input: UpdateVolunteerInput,
    condition?: ModelVolunteerConditionInput
  ): Promise<UpdateVolunteerMutation> {
    const statement = `mutation UpdateVolunteer($input: UpdateVolunteerInput!, $condition: ModelVolunteerConditionInput) {
        updateVolunteer(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVolunteerMutation>response.data.updateVolunteer;
  }
  async DeleteVolunteer(
    input: DeleteVolunteerInput,
    condition?: ModelVolunteerConditionInput
  ): Promise<DeleteVolunteerMutation> {
    const statement = `mutation DeleteVolunteer($input: DeleteVolunteerInput!, $condition: ModelVolunteerConditionInput) {
        deleteVolunteer(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVolunteerMutation>response.data.deleteVolunteer;
  }
  async CreateVolunteerMonthlySummary(
    input: CreateVolunteerMonthlySummaryInput,
    condition?: ModelVolunteerMonthlySummaryConditionInput
  ): Promise<CreateVolunteerMonthlySummaryMutation> {
    const statement = `mutation CreateVolunteerMonthlySummary($input: CreateVolunteerMonthlySummaryInput!, $condition: ModelVolunteerMonthlySummaryConditionInput) {
        createVolunteerMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVolunteerMonthlySummaryMutation>(
      response.data.createVolunteerMonthlySummary
    );
  }
  async UpdateVolunteerMonthlySummary(
    input: UpdateVolunteerMonthlySummaryInput,
    condition?: ModelVolunteerMonthlySummaryConditionInput
  ): Promise<UpdateVolunteerMonthlySummaryMutation> {
    const statement = `mutation UpdateVolunteerMonthlySummary($input: UpdateVolunteerMonthlySummaryInput!, $condition: ModelVolunteerMonthlySummaryConditionInput) {
        updateVolunteerMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVolunteerMonthlySummaryMutation>(
      response.data.updateVolunteerMonthlySummary
    );
  }
  async DeleteVolunteerMonthlySummary(
    input: DeleteVolunteerMonthlySummaryInput,
    condition?: ModelVolunteerMonthlySummaryConditionInput
  ): Promise<DeleteVolunteerMonthlySummaryMutation> {
    const statement = `mutation DeleteVolunteerMonthlySummary($input: DeleteVolunteerMonthlySummaryInput!, $condition: ModelVolunteerMonthlySummaryConditionInput) {
        deleteVolunteerMonthlySummary(input: $input, condition: $condition) {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVolunteerMonthlySummaryMutation>(
      response.data.deleteVolunteerMonthlySummary
    );
  }
  async SyncInitialSurveys(
    filter?: ModelInitialSurveyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncInitialSurveysQuery> {
    const statement = `query SyncInitialSurveys($filter: ModelInitialSurveyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncInitialSurveys(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            HeadHouseholdPhoneNumber
            HeadHouseholdSex
            HeadHouseholdMaritalStatus
            HeadHouseholdAge
            HeadHouseholdOccupation
            HeadHouseholdEducation
            PersonBeingInterviewed
            TotalNoPeopleHousehold
            NoHouseholdMale0_1Year
            NoHouseholdFemale0_1Year
            NoHouseholdMale1_5Year
            NoHouseholdFemale1_5Year
            NoHouseholdMale5_12Year
            NoHouseholdFemale5_12Year
            NoHouseholdMale13_17Year
            NoHouseholdFemale13_17Year
            NoHouseholdMale18_Year
            NoHouseholdFemale18_Year
            ReasonNoSchoolChildren5_17Year
            MainSourceDrinkingWater
            MainSourceOtherPurposeWater
            TimeToWaterSourceGetReturn
            HouseholdFrequencyAtWaterSource
            UsualHouseholdWaterFetcher
            ContainerCarryWater
            WaterTreatmentBeforeDrinking
            MainReasonNoWaterTreatmentBeforeDrinking
            WaterTreatmentMethod
            HowLongUsingWaterTreatment
            FrequencyWaterTreatment
            WaterStorageAtHome
            WaterStorageContainerHaveLid
            TakingWaterFromStorage
            RubbishDisposal
            HouseholdDefecationMethod
            WasteDisposalYoungestChild
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            CommonIllnessAffectingAllChildrenInHousehold
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            HealthChangeInAYear
            HealthChangeFamilyInAYear
            Completed
            Lat
            Lng
            ChildrenDiedAfterBeingBornAlive
            CausesOfChildrenDeath
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncInitialSurveysQuery>response.data.syncInitialSurveys;
  }
  async GetInitialSurvey(id: string): Promise<GetInitialSurveyQuery> {
    const statement = `query GetInitialSurvey($id: ID!) {
        getInitialSurvey(id: $id) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInitialSurveyQuery>response.data.getInitialSurvey;
  }
  async ListInitialSurveys(
    filter?: ModelInitialSurveyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInitialSurveysQuery> {
    const statement = `query ListInitialSurveys($filter: ModelInitialSurveyFilterInput, $limit: Int, $nextToken: String) {
        listInitialSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            HeadHouseholdPhoneNumber
            HeadHouseholdSex
            HeadHouseholdMaritalStatus
            HeadHouseholdAge
            HeadHouseholdOccupation
            HeadHouseholdEducation
            PersonBeingInterviewed
            TotalNoPeopleHousehold
            NoHouseholdMale0_1Year
            NoHouseholdFemale0_1Year
            NoHouseholdMale1_5Year
            NoHouseholdFemale1_5Year
            NoHouseholdMale5_12Year
            NoHouseholdFemale5_12Year
            NoHouseholdMale13_17Year
            NoHouseholdFemale13_17Year
            NoHouseholdMale18_Year
            NoHouseholdFemale18_Year
            ReasonNoSchoolChildren5_17Year
            MainSourceDrinkingWater
            MainSourceOtherPurposeWater
            TimeToWaterSourceGetReturn
            HouseholdFrequencyAtWaterSource
            UsualHouseholdWaterFetcher
            ContainerCarryWater
            WaterTreatmentBeforeDrinking
            MainReasonNoWaterTreatmentBeforeDrinking
            WaterTreatmentMethod
            HowLongUsingWaterTreatment
            FrequencyWaterTreatment
            WaterStorageAtHome
            WaterStorageContainerHaveLid
            TakingWaterFromStorage
            RubbishDisposal
            HouseholdDefecationMethod
            WasteDisposalYoungestChild
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            CommonIllnessAffectingAllChildrenInHousehold
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            HealthChangeInAYear
            HealthChangeFamilyInAYear
            Completed
            Lat
            Lng
            ChildrenDiedAfterBeingBornAlive
            CausesOfChildrenDeath
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListInitialSurveysQuery>response.data.listInitialSurveys;
  }
  async SyncFollowUpSurveys(
    filter?: ModelFollowUpSurveyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncFollowUpSurveysQuery> {
    const statement = `query SyncFollowUpSurveys($filter: ModelFollowUpSurveyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncFollowUpSurveys(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            MainSourceDrinkingWater
            PersonBeingInterviewed
            WaterTreatmentBeforeDrinking
            MainReasonNoWaterTreatmentBeforeDrinking
            WaterTreatmentMethod
            HowLongUsingWaterTreatment
            FrequencyWaterTreatment
            WaterStorageAtHome
            WaterStorageContainerHaveLid
            TakingWaterFromStorage
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            CommonIllnessAffectingAllChildrenInHousehold
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            HealthChangeInAYear
            HealthChangeFamilyInAYear
            BenefitSWP
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncFollowUpSurveysQuery>response.data.syncFollowUpSurveys;
  }
  async GetFollowUpSurvey(id: string): Promise<GetFollowUpSurveyQuery> {
    const statement = `query GetFollowUpSurvey($id: ID!) {
        getFollowUpSurvey(id: $id) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFollowUpSurveyQuery>response.data.getFollowUpSurvey;
  }
  async ListFollowUpSurveys(
    filter?: ModelFollowUpSurveyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFollowUpSurveysQuery> {
    const statement = `query ListFollowUpSurveys($filter: ModelFollowUpSurveyFilterInput, $limit: Int, $nextToken: String) {
        listFollowUpSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            MainSourceDrinkingWater
            PersonBeingInterviewed
            WaterTreatmentBeforeDrinking
            MainReasonNoWaterTreatmentBeforeDrinking
            WaterTreatmentMethod
            HowLongUsingWaterTreatment
            FrequencyWaterTreatment
            WaterStorageAtHome
            WaterStorageContainerHaveLid
            TakingWaterFromStorage
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            CommonIllnessAffectingAllChildrenInHousehold
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            HealthChangeInAYear
            HealthChangeFamilyInAYear
            BenefitSWP
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFollowUpSurveysQuery>response.data.listFollowUpSurveys;
  }
  async SyncHealthCheckSurveys(
    filter?: ModelHealthCheckSurveyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncHealthCheckSurveysQuery> {
    const statement = `query SyncHealthCheckSurveys($filter: ModelHealthCheckSurveyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncHealthCheckSurveys(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            PersonBeingInterviewed
            WasteDisposalYoungestChild
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            WaterTreatment24Hours
            MainReasonNoWaterTreatment24Hour
            WaterTreatment24HourMethod
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncHealthCheckSurveysQuery>response.data.syncHealthCheckSurveys;
  }
  async GetHealthCheckSurvey(id: string): Promise<GetHealthCheckSurveyQuery> {
    const statement = `query GetHealthCheckSurvey($id: ID!) {
        getHealthCheckSurvey(id: $id) {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHealthCheckSurveyQuery>response.data.getHealthCheckSurvey;
  }
  async ListHealthCheckSurveys(
    filter?: ModelHealthCheckSurveyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHealthCheckSurveysQuery> {
    const statement = `query ListHealthCheckSurveys($filter: ModelHealthCheckSurveyFilterInput, $limit: Int, $nextToken: String) {
        listHealthCheckSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Country
            Community
            SurveyId
            date
            HeadHouseholdName
            PersonBeingInterviewed
            WasteDisposalYoungestChild
            WashedHandsIn24Hours
            WhenWashedHandsIn24Hours
            WhatUsedToWashYourHands
            NoChildrenWithVomitingOrDiarrheaIn14days
            NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
            NoChildrenWithVomitingOrDiarrheaIn7days
            DidSickChildrenGoToHospital
            DidSickChildrenGoToHospitalYes
            SickChildrenBreastfeeding
            OutcomeMostRecentVomiting_DiarrheaAtHospital
            NoDaysNoWorkBecauseOfOwnIllness
            NoDaysNoWorkBecauseOfIllnessFamilyMembers
            MoneySpentMedicalTreatmentLast4weeks
            WaterTreatment24Hours
            MainReasonNoWaterTreatment24Hour
            WaterTreatment24HourMethod
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHealthCheckSurveysQuery>response.data.listHealthCheckSurveys;
  }
  async SyncSweMonthlySummaries(
    filter?: ModelSWEMonthlySummaryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSweMonthlySummariesQuery> {
    const statement = `query SyncSweMonthlySummaries($filter: ModelSWEMonthlySummaryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSWEMonthlySummaries(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            SWEPosition
            NoWaterSampleTaken
            NoSurveysCompleted
            NoHealthCheck
            NoLsn1Taught
            NoPersonsTaughtLesson1
            NoLsn2Taught
            NoPersonsTaughtLesson2
            NoLsn3Taught
            NoPersonsTaughtLesson3
            NoLsn4Taught
            NoPersonsTaughtLesson4
            NoPersonsTaught
            NoHouseholdReceivingChlorineSupplies
            NoLiquidChlorineDistributed
            NoChlorineTabletsDistributed
            NoWaterStorageContainersDistributed
            NoSchoolVisits
            NoPublicServiceMessagesAired
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSweMonthlySummariesQuery>response.data.syncSWEMonthlySummaries;
  }
  async GetSweMonthlySummary(id: string): Promise<GetSweMonthlySummaryQuery> {
    const statement = `query GetSweMonthlySummary($id: ID!) {
        getSWEMonthlySummary(id: $id) {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSweMonthlySummaryQuery>response.data.getSWEMonthlySummary;
  }
  async ListSweMonthlySummarys(
    filter?: ModelSWEMonthlySummaryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSweMonthlySummarysQuery> {
    const statement = `query ListSweMonthlySummarys($filter: ModelSWEMonthlySummaryFilterInput, $limit: Int, $nextToken: String) {
        listSWEMonthlySummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            SWEPosition
            NoWaterSampleTaken
            NoSurveysCompleted
            NoHealthCheck
            NoLsn1Taught
            NoPersonsTaughtLesson1
            NoLsn2Taught
            NoPersonsTaughtLesson2
            NoLsn3Taught
            NoPersonsTaughtLesson3
            NoLsn4Taught
            NoPersonsTaughtLesson4
            NoPersonsTaught
            NoHouseholdReceivingChlorineSupplies
            NoLiquidChlorineDistributed
            NoChlorineTabletsDistributed
            NoWaterStorageContainersDistributed
            NoSchoolVisits
            NoPublicServiceMessagesAired
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSweMonthlySummarysQuery>response.data.listSWEMonthlySummarys;
  }
  async SyncHouseholdWaterTests(
    filter?: ModelHouseholdWaterTestFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncHouseholdWaterTestsQuery> {
    const statement = `query SyncHouseholdWaterTests($filter: ModelHouseholdWaterTestFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncHouseholdWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            HeadHouseholdName
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncHouseholdWaterTestsQuery>response.data.syncHouseholdWaterTests;
  }
  async GetHouseholdWaterTest(id: string): Promise<GetHouseholdWaterTestQuery> {
    const statement = `query GetHouseholdWaterTest($id: ID!) {
        getHouseholdWaterTest(id: $id) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHouseholdWaterTestQuery>response.data.getHouseholdWaterTest;
  }
  async ListHouseholdWaterTests(
    filter?: ModelHouseholdWaterTestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHouseholdWaterTestsQuery> {
    const statement = `query ListHouseholdWaterTests($filter: ModelHouseholdWaterTestFilterInput, $limit: Int, $nextToken: String) {
        listHouseholdWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            HeadHouseholdName
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHouseholdWaterTestsQuery>response.data.listHouseholdWaterTests;
  }
  async SyncCommunityWaterTests(
    filter?: ModelCommunityWaterTestFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCommunityWaterTestsQuery> {
    const statement = `query SyncCommunityWaterTests($filter: ModelCommunityWaterTestFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCommunityWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            CommunityWaterLocation
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCommunityWaterTestsQuery>response.data.syncCommunityWaterTests;
  }
  async GetCommunityWaterTest(id: string): Promise<GetCommunityWaterTestQuery> {
    const statement = `query GetCommunityWaterTest($id: ID!) {
        getCommunityWaterTest(id: $id) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommunityWaterTestQuery>response.data.getCommunityWaterTest;
  }
  async ListCommunityWaterTests(
    filter?: ModelCommunityWaterTestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommunityWaterTestsQuery> {
    const statement = `query ListCommunityWaterTests($filter: ModelCommunityWaterTestFilterInput, $limit: Int, $nextToken: String) {
        listCommunityWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            CommunityWaterLocation
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommunityWaterTestsQuery>response.data.listCommunityWaterTests;
  }
  async SyncCommunityWaters(
    filter?: ModelCommunityWaterFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCommunityWatersQuery> {
    const statement = `query SyncCommunityWaters($filter: ModelCommunityWaterFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCommunityWaters(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            CommunityWaterLocation
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCommunityWatersQuery>response.data.syncCommunityWaters;
  }
  async GetCommunityWater(id: string): Promise<GetCommunityWaterQuery> {
    const statement = `query GetCommunityWater($id: ID!) {
        getCommunityWater(id: $id) {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommunityWaterQuery>response.data.getCommunityWater;
  }
  async ListCommunityWaters(
    filter?: ModelCommunityWaterFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommunityWatersQuery> {
    const statement = `query ListCommunityWaters($filter: ModelCommunityWaterFilterInput, $limit: Int, $nextToken: String) {
        listCommunityWaters(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            date
            Country
            Community
            CommunityWaterLocation
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommunityWatersQuery>response.data.listCommunityWaters;
  }
  async SyncConfigDefinitions(
    filter?: ModelConfigDefinitionsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncConfigDefinitionsQuery> {
    const statement = `query SyncConfigDefinitions($filter: ModelConfigDefinitionsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncConfigDefinitions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            type
            name
            value
            desc
            childname
            childvalue
            childdesc
            parentname
            parentvalue
            parentdesc
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncConfigDefinitionsQuery>response.data.syncConfigDefinitions;
  }
  async GetConfigDefinitions(id: string): Promise<GetConfigDefinitionsQuery> {
    const statement = `query GetConfigDefinitions($id: ID!) {
        getConfigDefinitions(id: $id) {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConfigDefinitionsQuery>response.data.getConfigDefinitions;
  }
  async ListConfigDefinitionss(
    filter?: ModelConfigDefinitionsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConfigDefinitionssQuery> {
    const statement = `query ListConfigDefinitionss($filter: ModelConfigDefinitionsFilterInput, $limit: Int, $nextToken: String) {
        listConfigDefinitionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            name
            value
            desc
            childname
            childvalue
            childdesc
            parentname
            parentvalue
            parentdesc
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConfigDefinitionssQuery>response.data.listConfigDefinitionss;
  }
  async SyncBwfsurveytotals(
    filter?: ModelBWFSURVEYTOTALSFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBwfsurveytotalsQuery> {
    const statement = `query SyncBwfsurveytotals($filter: ModelBWFSURVEYTOTALSFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBWFSURVEYTOTALS(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            surveyName
            total
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBwfsurveytotalsQuery>response.data.syncBWFSURVEYTOTALS;
  }
  async GetBwfsurveytotals(id: string): Promise<GetBwfsurveytotalsQuery> {
    const statement = `query GetBwfsurveytotals($id: ID!) {
        getBWFSURVEYTOTALS(id: $id) {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBwfsurveytotalsQuery>response.data.getBWFSURVEYTOTALS;
  }
  async ListBwfsurveytotalSs(
    filter?: ModelBWFSURVEYTOTALSFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBwfsurveytotalSsQuery> {
    const statement = `query ListBwfsurveytotalSs($filter: ModelBWFSURVEYTOTALSFilterInput, $limit: Int, $nextToken: String) {
        listBWFSURVEYTOTALSs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            surveyName
            total
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBwfsurveytotalSsQuery>response.data.listBWFSURVEYTOTALSs;
  }
  async SyncVolunteerHouseholdWaterTests(
    filter?: ModelVolunteerHouseholdWaterTestFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVolunteerHouseholdWaterTestsQuery> {
    const statement = `query SyncVolunteerHouseholdWaterTests($filter: ModelVolunteerHouseholdWaterTestFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVolunteerHouseholdWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            Country
            Community
            HeadHouseholdName
            HouseholdLocation
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncVolunteerHouseholdWaterTestsQuery>(
      response.data.syncVolunteerHouseholdWaterTests
    );
  }
  async GetVolunteerHouseholdWaterTest(
    id: string
  ): Promise<GetVolunteerHouseholdWaterTestQuery> {
    const statement = `query GetVolunteerHouseholdWaterTest($id: ID!) {
        getVolunteerHouseholdWaterTest(id: $id) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVolunteerHouseholdWaterTestQuery>(
      response.data.getVolunteerHouseholdWaterTest
    );
  }
  async ListVolunteerHouseholdWaterTests(
    filter?: ModelVolunteerHouseholdWaterTestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVolunteerHouseholdWaterTestsQuery> {
    const statement = `query ListVolunteerHouseholdWaterTests($filter: ModelVolunteerHouseholdWaterTestFilterInput, $limit: Int, $nextToken: String) {
        listVolunteerHouseholdWaterTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            Country
            Community
            HeadHouseholdName
            HouseholdLocation
            ColilertDateTested
            ColilertDateRead
            ColilertTestResult
            PetrifilmDateTested
            PetrifilmDateRead
            PetrifilmTestResult
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVolunteerHouseholdWaterTestsQuery>(
      response.data.listVolunteerHouseholdWaterTests
    );
  }
  async SyncVolunteerHouseholds(
    filter?: ModelVolunteerHouseholdFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVolunteerHouseholdsQuery> {
    const statement = `query SyncVolunteerHouseholds($filter: ModelVolunteerHouseholdFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVolunteerHouseholds(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            Country
            Community
            HeadHouseholdName
            HouseholdLocation
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncVolunteerHouseholdsQuery>response.data.syncVolunteerHouseholds;
  }
  async GetVolunteerHousehold(id: string): Promise<GetVolunteerHouseholdQuery> {
    const statement = `query GetVolunteerHousehold($id: ID!) {
        getVolunteerHousehold(id: $id) {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVolunteerHouseholdQuery>response.data.getVolunteerHousehold;
  }
  async ListVolunteerHouseholds(
    filter?: ModelVolunteerHouseholdFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVolunteerHouseholdsQuery> {
    const statement = `query ListVolunteerHouseholds($filter: ModelVolunteerHouseholdFilterInput, $limit: Int, $nextToken: String) {
        listVolunteerHouseholds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            Country
            Community
            HeadHouseholdName
            HouseholdLocation
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVolunteerHouseholdsQuery>response.data.listVolunteerHouseholds;
  }
  async SyncVolunteers(
    filter?: ModelVolunteerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVolunteersQuery> {
    const statement = `query SyncVolunteers($filter: ModelVolunteerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVolunteers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncVolunteersQuery>response.data.syncVolunteers;
  }
  async GetVolunteer(id: string): Promise<GetVolunteerQuery> {
    const statement = `query GetVolunteer($id: ID!) {
        getVolunteer(id: $id) {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVolunteerQuery>response.data.getVolunteer;
  }
  async ListVolunteers(
    filter?: ModelVolunteerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVolunteersQuery> {
    const statement = `query ListVolunteers($filter: ModelVolunteerFilterInput, $limit: Int, $nextToken: String) {
        listVolunteers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVolunteersQuery>response.data.listVolunteers;
  }
  async SyncVolunteerMonthlySummaries(
    filter?: ModelVolunteerMonthlySummaryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncVolunteerMonthlySummariesQuery> {
    const statement = `query SyncVolunteerMonthlySummaries($filter: ModelVolunteerMonthlySummaryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncVolunteerMonthlySummaries(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            NoWaterSampleTaken
            NoLsn1TaughtAsPrimaryInstr
            NoLsn1TaughtAssistingSWE
            NoPersonsTaughtLesson1ByVol
            NoLsn2TaughtAsPrimaryInstr
            NoLsn2TaughtAssistingSWE
            NoPersonsTaughtLesson2ByVol
            NoLsn3TaughtAsPrimaryInstr
            NoLsn3TaughtAssistingSWE
            NoPersonsTaughtLesson3ByVol
            NoLsn4TaughtAsPrimaryInstr
            NoLsn4TaughtAssistingSWE
            NoPersonsTaughtLesson4ByVol
            NoPersonsTaughtByVol
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncVolunteerMonthlySummariesQuery>(
      response.data.syncVolunteerMonthlySummaries
    );
  }
  async GetVolunteerMonthlySummary(
    id: string
  ): Promise<GetVolunteerMonthlySummaryQuery> {
    const statement = `query GetVolunteerMonthlySummary($id: ID!) {
        getVolunteerMonthlySummary(id: $id) {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVolunteerMonthlySummaryQuery>(
      response.data.getVolunteerMonthlySummary
    );
  }
  async ListVolunteerMonthlySummarys(
    filter?: ModelVolunteerMonthlySummaryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVolunteerMonthlySummarysQuery> {
    const statement = `query ListVolunteerMonthlySummarys($filter: ModelVolunteerMonthlySummaryFilterInput, $limit: Int, $nextToken: String) {
        listVolunteerMonthlySummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            Namebwe
            Namevol
            date
            NoWaterSampleTaken
            NoLsn1TaughtAsPrimaryInstr
            NoLsn1TaughtAssistingSWE
            NoPersonsTaughtLesson1ByVol
            NoLsn2TaughtAsPrimaryInstr
            NoLsn2TaughtAssistingSWE
            NoPersonsTaughtLesson2ByVol
            NoLsn3TaughtAsPrimaryInstr
            NoLsn3TaughtAssistingSWE
            NoPersonsTaughtLesson3ByVol
            NoLsn4TaughtAsPrimaryInstr
            NoLsn4TaughtAssistingSWE
            NoPersonsTaughtLesson4ByVol
            NoPersonsTaughtByVol
            Completed
            Lat
            Lng
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVolunteerMonthlySummarysQuery>(
      response.data.listVolunteerMonthlySummarys
    );
  }
  OnCreateInitialSurveyListener: Observable<
    SubscriptionResponse<OnCreateInitialSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInitialSurvey {
        onCreateInitialSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateInitialSurveySubscription>>;

  OnUpdateInitialSurveyListener: Observable<
    SubscriptionResponse<OnUpdateInitialSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInitialSurvey {
        onUpdateInitialSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateInitialSurveySubscription>>;

  OnDeleteInitialSurveyListener: Observable<
    SubscriptionResponse<OnDeleteInitialSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInitialSurvey {
        onDeleteInitialSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          HeadHouseholdPhoneNumber
          HeadHouseholdSex
          HeadHouseholdMaritalStatus
          HeadHouseholdAge
          HeadHouseholdOccupation
          HeadHouseholdEducation
          PersonBeingInterviewed
          TotalNoPeopleHousehold
          NoHouseholdMale0_1Year
          NoHouseholdFemale0_1Year
          NoHouseholdMale1_5Year
          NoHouseholdFemale1_5Year
          NoHouseholdMale5_12Year
          NoHouseholdFemale5_12Year
          NoHouseholdMale13_17Year
          NoHouseholdFemale13_17Year
          NoHouseholdMale18_Year
          NoHouseholdFemale18_Year
          ReasonNoSchoolChildren5_17Year
          MainSourceDrinkingWater
          MainSourceOtherPurposeWater
          TimeToWaterSourceGetReturn
          HouseholdFrequencyAtWaterSource
          UsualHouseholdWaterFetcher
          ContainerCarryWater
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          RubbishDisposal
          HouseholdDefecationMethod
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          Completed
          Lat
          Lng
          ChildrenDiedAfterBeingBornAlive
          CausesOfChildrenDeath
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteInitialSurveySubscription>>;

  OnCreateFollowUpSurveyListener: Observable<
    SubscriptionResponse<OnCreateFollowUpSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFollowUpSurvey {
        onCreateFollowUpSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateFollowUpSurveySubscription>>;

  OnUpdateFollowUpSurveyListener: Observable<
    SubscriptionResponse<OnUpdateFollowUpSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFollowUpSurvey {
        onUpdateFollowUpSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateFollowUpSurveySubscription>>;

  OnDeleteFollowUpSurveyListener: Observable<
    SubscriptionResponse<OnDeleteFollowUpSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFollowUpSurvey {
        onDeleteFollowUpSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          MainSourceDrinkingWater
          PersonBeingInterviewed
          WaterTreatmentBeforeDrinking
          MainReasonNoWaterTreatmentBeforeDrinking
          WaterTreatmentMethod
          HowLongUsingWaterTreatment
          FrequencyWaterTreatment
          WaterStorageAtHome
          WaterStorageContainerHaveLid
          TakingWaterFromStorage
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          CommonIllnessAffectingAllChildrenInHousehold
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          HealthChangeInAYear
          HealthChangeFamilyInAYear
          BenefitSWP
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteFollowUpSurveySubscription>>;

  OnCreateHealthCheckSurveyListener: Observable<
    SubscriptionResponse<OnCreateHealthCheckSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHealthCheckSurvey {
        onCreateHealthCheckSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHealthCheckSurveySubscription>>;

  OnUpdateHealthCheckSurveyListener: Observable<
    SubscriptionResponse<OnUpdateHealthCheckSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHealthCheckSurvey {
        onUpdateHealthCheckSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHealthCheckSurveySubscription>>;

  OnDeleteHealthCheckSurveyListener: Observable<
    SubscriptionResponse<OnDeleteHealthCheckSurveySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHealthCheckSurvey {
        onDeleteHealthCheckSurvey {
          __typename
          id
          Namebwe
          Country
          Community
          SurveyId
          date
          HeadHouseholdName
          PersonBeingInterviewed
          WasteDisposalYoungestChild
          WashedHandsIn24Hours
          WhenWashedHandsIn24Hours
          WhatUsedToWashYourHands
          NoChildrenWithVomitingOrDiarrheaIn14days
          NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek
          NoChildrenWithVomitingOrDiarrheaIn7days
          DidSickChildrenGoToHospital
          DidSickChildrenGoToHospitalYes
          SickChildrenBreastfeeding
          OutcomeMostRecentVomiting_DiarrheaAtHospital
          NoDaysNoWorkBecauseOfOwnIllness
          NoDaysNoWorkBecauseOfIllnessFamilyMembers
          MoneySpentMedicalTreatmentLast4weeks
          WaterTreatment24Hours
          MainReasonNoWaterTreatment24Hour
          WaterTreatment24HourMethod
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHealthCheckSurveySubscription>>;

  OnCreateSweMonthlySummaryListener: Observable<
    SubscriptionResponse<OnCreateSweMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSweMonthlySummary {
        onCreateSWEMonthlySummary {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateSweMonthlySummarySubscription>>;

  OnUpdateSweMonthlySummaryListener: Observable<
    SubscriptionResponse<OnUpdateSweMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSweMonthlySummary {
        onUpdateSWEMonthlySummary {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateSweMonthlySummarySubscription>>;

  OnDeleteSweMonthlySummaryListener: Observable<
    SubscriptionResponse<OnDeleteSweMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSweMonthlySummary {
        onDeleteSWEMonthlySummary {
          __typename
          id
          Namebwe
          date
          SWEPosition
          NoWaterSampleTaken
          NoSurveysCompleted
          NoHealthCheck
          NoLsn1Taught
          NoPersonsTaughtLesson1
          NoLsn2Taught
          NoPersonsTaughtLesson2
          NoLsn3Taught
          NoPersonsTaughtLesson3
          NoLsn4Taught
          NoPersonsTaughtLesson4
          NoPersonsTaught
          NoHouseholdReceivingChlorineSupplies
          NoLiquidChlorineDistributed
          NoChlorineTabletsDistributed
          NoWaterStorageContainersDistributed
          NoSchoolVisits
          NoPublicServiceMessagesAired
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteSweMonthlySummarySubscription>>;

  OnCreateHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnCreateHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHouseholdWaterTest {
        onCreateHouseholdWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHouseholdWaterTestSubscription>>;

  OnUpdateHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnUpdateHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHouseholdWaterTest {
        onUpdateHouseholdWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHouseholdWaterTestSubscription>>;

  OnDeleteHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnDeleteHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHouseholdWaterTest {
        onDeleteHouseholdWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          HeadHouseholdName
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHouseholdWaterTestSubscription>>;

  OnCreateCommunityWaterTestListener: Observable<
    SubscriptionResponse<OnCreateCommunityWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCommunityWaterTest {
        onCreateCommunityWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommunityWaterTestSubscription>>;

  OnUpdateCommunityWaterTestListener: Observable<
    SubscriptionResponse<OnUpdateCommunityWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCommunityWaterTest {
        onUpdateCommunityWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommunityWaterTestSubscription>>;

  OnDeleteCommunityWaterTestListener: Observable<
    SubscriptionResponse<OnDeleteCommunityWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCommunityWaterTest {
        onDeleteCommunityWaterTest {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommunityWaterTestSubscription>>;

  OnCreateCommunityWaterListener: Observable<
    SubscriptionResponse<OnCreateCommunityWaterSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCommunityWater {
        onCreateCommunityWater {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommunityWaterSubscription>>;

  OnUpdateCommunityWaterListener: Observable<
    SubscriptionResponse<OnUpdateCommunityWaterSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCommunityWater {
        onUpdateCommunityWater {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommunityWaterSubscription>>;

  OnDeleteCommunityWaterListener: Observable<
    SubscriptionResponse<OnDeleteCommunityWaterSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCommunityWater {
        onDeleteCommunityWater {
          __typename
          id
          Namebwe
          date
          Country
          Community
          CommunityWaterLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommunityWaterSubscription>>;

  OnCreateConfigDefinitionsListener: Observable<
    SubscriptionResponse<OnCreateConfigDefinitionsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfigDefinitions {
        onCreateConfigDefinitions {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateConfigDefinitionsSubscription>>;

  OnUpdateConfigDefinitionsListener: Observable<
    SubscriptionResponse<OnUpdateConfigDefinitionsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConfigDefinitions {
        onUpdateConfigDefinitions {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateConfigDefinitionsSubscription>>;

  OnDeleteConfigDefinitionsListener: Observable<
    SubscriptionResponse<OnDeleteConfigDefinitionsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConfigDefinitions {
        onDeleteConfigDefinitions {
          __typename
          id
          type
          name
          value
          desc
          childname
          childvalue
          childdesc
          parentname
          parentvalue
          parentdesc
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteConfigDefinitionsSubscription>>;

  OnCreateBwfsurveytotalsListener: Observable<
    SubscriptionResponse<OnCreateBwfsurveytotalsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBwfsurveytotals {
        onCreateBWFSURVEYTOTALS {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBwfsurveytotalsSubscription>>;

  OnUpdateBwfsurveytotalsListener: Observable<
    SubscriptionResponse<OnUpdateBwfsurveytotalsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBwfsurveytotals {
        onUpdateBWFSURVEYTOTALS {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBwfsurveytotalsSubscription>>;

  OnDeleteBwfsurveytotalsListener: Observable<
    SubscriptionResponse<OnDeleteBwfsurveytotalsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBwfsurveytotals {
        onDeleteBWFSURVEYTOTALS {
          __typename
          id
          surveyName
          total
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBwfsurveytotalsSubscription>>;

  OnCreateVolunteerHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnCreateVolunteerHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVolunteerHouseholdWaterTest {
        onCreateVolunteerHouseholdWaterTest {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateVolunteerHouseholdWaterTestSubscription>
  >;

  OnUpdateVolunteerHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnUpdateVolunteerHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVolunteerHouseholdWaterTest {
        onUpdateVolunteerHouseholdWaterTest {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateVolunteerHouseholdWaterTestSubscription>
  >;

  OnDeleteVolunteerHouseholdWaterTestListener: Observable<
    SubscriptionResponse<OnDeleteVolunteerHouseholdWaterTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVolunteerHouseholdWaterTest {
        onDeleteVolunteerHouseholdWaterTest {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          ColilertDateTested
          ColilertDateRead
          ColilertTestResult
          PetrifilmDateTested
          PetrifilmDateRead
          PetrifilmTestResult
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteVolunteerHouseholdWaterTestSubscription>
  >;

  OnCreateVolunteerHouseholdListener: Observable<
    SubscriptionResponse<OnCreateVolunteerHouseholdSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVolunteerHousehold {
        onCreateVolunteerHousehold {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateVolunteerHouseholdSubscription>>;

  OnUpdateVolunteerHouseholdListener: Observable<
    SubscriptionResponse<OnUpdateVolunteerHouseholdSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVolunteerHousehold {
        onUpdateVolunteerHousehold {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateVolunteerHouseholdSubscription>>;

  OnDeleteVolunteerHouseholdListener: Observable<
    SubscriptionResponse<OnDeleteVolunteerHouseholdSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVolunteerHousehold {
        onDeleteVolunteerHousehold {
          __typename
          id
          Namebwe
          Namevol
          date
          Country
          Community
          HeadHouseholdName
          HouseholdLocation
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteVolunteerHouseholdSubscription>>;

  OnCreateVolunteerListener: Observable<
    SubscriptionResponse<OnCreateVolunteerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVolunteer {
        onCreateVolunteer {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateVolunteerSubscription>>;

  OnUpdateVolunteerListener: Observable<
    SubscriptionResponse<OnUpdateVolunteerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVolunteer {
        onUpdateVolunteer {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateVolunteerSubscription>>;

  OnDeleteVolunteerListener: Observable<
    SubscriptionResponse<OnDeleteVolunteerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVolunteer {
        onDeleteVolunteer {
          __typename
          id
          Namebwe
          Namevol
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteVolunteerSubscription>>;

  OnCreateVolunteerMonthlySummaryListener: Observable<
    SubscriptionResponse<OnCreateVolunteerMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVolunteerMonthlySummary {
        onCreateVolunteerMonthlySummary {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnCreateVolunteerMonthlySummarySubscription>
  >;

  OnUpdateVolunteerMonthlySummaryListener: Observable<
    SubscriptionResponse<OnUpdateVolunteerMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVolunteerMonthlySummary {
        onUpdateVolunteerMonthlySummary {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnUpdateVolunteerMonthlySummarySubscription>
  >;

  OnDeleteVolunteerMonthlySummaryListener: Observable<
    SubscriptionResponse<OnDeleteVolunteerMonthlySummarySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVolunteerMonthlySummary {
        onDeleteVolunteerMonthlySummary {
          __typename
          id
          Namebwe
          Namevol
          date
          NoWaterSampleTaken
          NoLsn1TaughtAsPrimaryInstr
          NoLsn1TaughtAssistingSWE
          NoPersonsTaughtLesson1ByVol
          NoLsn2TaughtAsPrimaryInstr
          NoLsn2TaughtAssistingSWE
          NoPersonsTaughtLesson2ByVol
          NoLsn3TaughtAsPrimaryInstr
          NoLsn3TaughtAssistingSWE
          NoPersonsTaughtLesson3ByVol
          NoLsn4TaughtAsPrimaryInstr
          NoLsn4TaughtAssistingSWE
          NoPersonsTaughtLesson4ByVol
          NoPersonsTaughtByVol
          Completed
          Lat
          Lng
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<OnDeleteVolunteerMonthlySummarySubscription>
  >;
}
