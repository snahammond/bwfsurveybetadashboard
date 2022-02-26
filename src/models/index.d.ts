import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AnswerType {
  TEXTVALUE = "TEXTVALUE",
  ENUMVALUE = "ENUMVALUE",
  ENUMMULTIPLEVALUE = "ENUMMULTIPLEVALUE",
  ENUMWITHNONEVALUE = "ENUMWITHNONEVALUE",
  ENUMDROPDOWNVALUE = "ENUMDROPDOWNVALUE",
  NUMBERVALUE = "NUMBERVALUE",
  DATEVALUE = "DATEVALUE"
}



export declare class InitialSurvey {
  readonly id: string;
  readonly Namebwe: string;
  readonly Country: string;
  readonly Community: string;
  readonly SurveyId: number;
  readonly date?: string;
  readonly HeadHouseholdName: string;
  readonly HeadHouseholdPhoneNumber: string;
  readonly HeadHouseholdSex: string;
  readonly HeadHouseholdMaritalStatus: string;
  readonly HeadHouseholdAge: number;
  readonly HeadHouseholdOccupation: string;
  readonly HeadHouseholdEducation: string;
  readonly PersonBeingInterviewed: string;
  readonly TotalNoPeopleHousehold: number;
  readonly NoHouseholdMale0_1Year: number;
  readonly NoHouseholdFemale0_1Year: number;
  readonly NoHouseholdMale1_5Year: number;
  readonly NoHouseholdFemale1_5Year: number;
  readonly NoHouseholdMale5_12Year: number;
  readonly NoHouseholdFemale5_12Year: number;
  readonly NoHouseholdMale13_17Year: number;
  readonly NoHouseholdFemale13_17Year: number;
  readonly NoHouseholdMale18_Year: number;
  readonly NoHouseholdFemale18_Year: number;
  readonly ReasonNoSchoolChildren5_17Year: string;
  readonly MainSourceDrinkingWater: string;
  readonly MainSourceOtherPurposeWater: string;
  readonly TimeToWaterSourceGetReturn: number;
  readonly HouseholdFrequencyAtWaterSource: string;
  readonly UsualHouseholdWaterFetcher: string;
  readonly ContainerCarryWater: string;
  readonly WaterTreatmentBeforeDrinking: string;
  readonly MainReasonNoWaterTreatmentBeforeDrinking: string;
  readonly WaterTreatmentMethod: string;
  readonly FrequencyWaterTreatment: string;
  readonly LastTimeTreatedHouseholdWaterWithChlorine: string;
  readonly WhereDidYouGetChlorineToTreatHouseholdWater: string;
  readonly AmountSpendPerWeekForChlorineToTreatWater: number;
  readonly HowDifficultToObtainChlorine: string;
  readonly TakingWaterFromStorage: string;
  readonly RubbishDisposal: string;
  readonly HouseholdDefecationMethod: string;
  readonly WasteDisposalYoungestChild: string;
  readonly WashedHandsIn24Hours: string;
  readonly WhenWashedHandsIn24Hours: string;
  readonly WhatUsedToWashYourHands: string;
  readonly CommonIllnessAffectingAllChildrenInHousehold: string;
  readonly NoChildrenWithVomitingOrDiarrheaIn14days: number;
  readonly NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  readonly NoChildrenWithVomitingOrDiarrheaIn7days: number;
  readonly DidSickChildrenGoToHospital: string;
  readonly DidSickChildrenGoToHospitalYes: string;
  readonly SickChildrenBreastfeeding: string;
  readonly OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  readonly NoDaysNoWorkBecauseOfOwnIllness: number;
  readonly NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  readonly MoneySpentMedicalTreatmentLast4weeks: number;
  readonly HealthChangeInAYear: string;
  readonly HealthChangeFamilyInAYear: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  readonly ChildrenDiedAfterBeingBornAlive: string;
  readonly CausesOfChildrenDeath: string;
  constructor(init: ModelInit<InitialSurvey>);
  static copyOf(source: InitialSurvey, mutator: (draft: MutableModel<InitialSurvey>) => MutableModel<InitialSurvey> | void): InitialSurvey;
}

export declare class InitialSurveyDeleteControl {
  readonly id: string;
  readonly Namebwe: string;
  readonly Completed: number;
  constructor(init: ModelInit<InitialSurveyDeleteControl>);
  static copyOf(source: InitialSurveyDeleteControl, mutator: (draft: MutableModel<InitialSurveyDeleteControl>) => MutableModel<InitialSurveyDeleteControl> | void): InitialSurveyDeleteControl;
}

export declare class FollowUpSurvey {
  readonly id: string;
  readonly Namebwe: string;
  readonly Country: string;
  readonly Community: string;
  readonly SurveyId: number;
  readonly date?: string;
  readonly HeadHouseholdName: string;
  readonly PersonBeingInterviewed: string;
  readonly WaterTreatmentBeforeDrinking: string;
  readonly MainReasonNoWaterTreatmentBeforeDrinking: string;
  readonly WaterTreatmentMethod: string;
  readonly FrequencyWaterTreatment: string;
  readonly LastTimeTreatedHouseholdWaterWithChlorine: string;
  readonly WhereDidYouGetChlorineToTreatHouseholdWater: string;
  readonly AmountSpendPerWeekForChlorineToTreatWater: number;
  readonly HowDifficultToObtainChlorine: string;
  readonly TakingWaterFromStorage: string;
  readonly WhenWashedHandsIn24Hours: string;
  readonly WhatUsedToWashYourHands: string;
  readonly CommonIllnessAffectingAllChildrenInHousehold: string;
  readonly NoChildrenWithVomitingOrDiarrheaIn14days: number;
  readonly NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  readonly NoChildrenWithVomitingOrDiarrheaIn7days: number;
  readonly DidSickChildrenGoToHospital: string;
  readonly DidSickChildrenGoToHospitalYes: string;
  readonly SickChildrenBreastfeeding: string;
  readonly OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  readonly NoDaysNoWorkBecauseOfOwnIllness: number;
  readonly NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  readonly MoneySpentMedicalTreatmentLast4weeks: number;
  readonly HealthChangeInAYear: string;
  readonly HealthChangeFamilyInAYear: string;
  readonly BenefitSWP: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<FollowUpSurvey>);
  static copyOf(source: FollowUpSurvey, mutator: (draft: MutableModel<FollowUpSurvey>) => MutableModel<FollowUpSurvey> | void): FollowUpSurvey;
}

export declare class HealthCheckSurvey {
  readonly id: string;
  readonly Namebwe: string;
  readonly Country: string;
  readonly Community: string;
  readonly SurveyId: number;
  readonly date?: string;
  readonly HeadHouseholdName: string;
  readonly PersonBeingInterviewed: string;
  readonly LastTimeTreatedHouseholdWaterWithChlorine: string;
  readonly WhereDidYouGetChlorineToTreatHouseholdWater: string;
  readonly AmountSpendPerWeekForChlorineToTreatWater: number;
  readonly HowDifficultToObtainChlorine: string;
  readonly WasteDisposalYoungestChild: string;
  readonly WashedHandsIn24Hours: string;
  readonly WhenWashedHandsIn24Hours: string;
  readonly WhatUsedToWashYourHands: string;
  readonly NoChildrenWithVomitingOrDiarrheaIn14days: number;
  readonly NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek: number;
  readonly NoChildrenWithVomitingOrDiarrheaIn7days: number;
  readonly DidSickChildrenGoToHospital: string;
  readonly DidSickChildrenGoToHospitalYes: string;
  readonly SickChildrenBreastfeeding: string;
  readonly OutcomeMostRecentVomiting_DiarrheaAtHospital: string;
  readonly NoDaysNoWorkBecauseOfOwnIllness: number;
  readonly NoDaysNoWorkBecauseOfIllnessFamilyMembers: number;
  readonly MoneySpentMedicalTreatmentLast4weeks: number;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<HealthCheckSurvey>);
  static copyOf(source: HealthCheckSurvey, mutator: (draft: MutableModel<HealthCheckSurvey>) => MutableModel<HealthCheckSurvey> | void): HealthCheckSurvey;
}

export declare class SWEMonthlySummary {
  readonly id: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly SWEPosition: string;
  readonly NoWaterSampleTaken: number;
  readonly NoSurveysCompleted: number;
  readonly NoHealthCheck: number;
  readonly NoLsn1Taught: number;
  readonly NoPersonsTaughtLesson1: number;
  readonly NoLsn2Taught: number;
  readonly NoPersonsTaughtLesson2: number;
  readonly NoLsn3Taught: number;
  readonly NoPersonsTaughtLesson3: number;
  readonly NoLsn4Taught: number;
  readonly NoPersonsTaughtLesson4: number;
  readonly NoPersonsTaught: number;
  readonly NoHouseholdReceivingChlorineSupplies: number;
  readonly NoLiquidChlorineDistributed: number;
  readonly NoChlorineTabletsDistributed: number;
  readonly NoWaterStorageContainersDistributed: number;
  readonly NoSchoolVisits: number;
  readonly NoPublicServiceMessagesAired: number;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<SWEMonthlySummary>);
  static copyOf(source: SWEMonthlySummary, mutator: (draft: MutableModel<SWEMonthlySummary>) => MutableModel<SWEMonthlySummary> | void): SWEMonthlySummary;
}

export declare class HouseholdWaterTest {
  readonly id: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly Country: string;
  readonly Community: string;
  readonly HeadHouseholdName: string;
  readonly ColilertDateTested: string;
  readonly ColilertDateRead: string;
  readonly ColilertTestResult: string;
  readonly PetrifilmDateTested: string;
  readonly PetrifilmDateRead: string;
  readonly PetrifilmTestResult: string;
  readonly ChlorineDateTested: string;
  readonly ChlorineTestResult: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<HouseholdWaterTest>);
  static copyOf(source: HouseholdWaterTest, mutator: (draft: MutableModel<HouseholdWaterTest>) => MutableModel<HouseholdWaterTest> | void): HouseholdWaterTest;
}

export declare class CommunityWaterTest {
  readonly id: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly Country: string;
  readonly Community: string;
  readonly CommunityWaterLocation: string;
  readonly ColilertDateTested: string;
  readonly ColilertDateRead: string;
  readonly ColilertTestResult: string;
  readonly PetrifilmDateTested: string;
  readonly PetrifilmDateRead: string;
  readonly PetrifilmTestResult: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<CommunityWaterTest>);
  static copyOf(source: CommunityWaterTest, mutator: (draft: MutableModel<CommunityWaterTest>) => MutableModel<CommunityWaterTest> | void): CommunityWaterTest;
}

export declare class CommunityWater {
  readonly id: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly Country: string;
  readonly Community: string;
  readonly CommunityWaterLocation: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<CommunityWater>);
  static copyOf(source: CommunityWater, mutator: (draft: MutableModel<CommunityWater>) => MutableModel<CommunityWater> | void): CommunityWater;
}

export declare class ConfigDefinitions {
  readonly id: string;
  readonly type: string;
  readonly name: string;
  readonly value: string;
  readonly desc: string;
  readonly childname: string;
  readonly childvalue: string;
  readonly childdesc: string;
  readonly parentname: string;
  readonly parentvalue: string;
  readonly parentdesc: string;
  constructor(init: ModelInit<ConfigDefinitions>);
  static copyOf(source: ConfigDefinitions, mutator: (draft: MutableModel<ConfigDefinitions>) => MutableModel<ConfigDefinitions> | void): ConfigDefinitions;
}

export declare class BWFSURVEYTOTALS {
  readonly id: string;
  readonly surveyName: string;
  readonly total: number;
  constructor(init: ModelInit<BWFSURVEYTOTALS>);
  static copyOf(source: BWFSURVEYTOTALS, mutator: (draft: MutableModel<BWFSURVEYTOTALS>) => MutableModel<BWFSURVEYTOTALS> | void): BWFSURVEYTOTALS;
}

export declare class VolunteerHouseholdWaterTest {
  readonly id: string;
  readonly Namebwe: string;
  readonly Namevol: string;
  readonly date?: string;
  readonly Country: string;
  readonly Community: string;
  readonly HeadHouseholdName: string;
  readonly HouseholdLocation: string;
  readonly ColilertDateTested: string;
  readonly ColilertDateRead: string;
  readonly ColilertTestResult: string;
  readonly PetrifilmDateTested: string;
  readonly PetrifilmDateRead: string;
  readonly PetrifilmTestResult: string;
  readonly ChlorineDateTested: string;
  readonly ChlorineTestResult: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<VolunteerHouseholdWaterTest>);
  static copyOf(source: VolunteerHouseholdWaterTest, mutator: (draft: MutableModel<VolunteerHouseholdWaterTest>) => MutableModel<VolunteerHouseholdWaterTest> | void): VolunteerHouseholdWaterTest;
}

export declare class VolunteerHousehold {
  readonly id: string;
  readonly Namebwe: string;
  readonly Namevol: string;
  readonly date?: string;
  readonly Country: string;
  readonly Community: string;
  readonly HeadHouseholdName: string;
  readonly HouseholdLocation: string;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<VolunteerHousehold>);
  static copyOf(source: VolunteerHousehold, mutator: (draft: MutableModel<VolunteerHousehold>) => MutableModel<VolunteerHousehold> | void): VolunteerHousehold;
}

export declare class Volunteer {
  readonly id: string;
  readonly Namebwe: string;
  readonly Namevol: string;
  constructor(init: ModelInit<Volunteer>);
  static copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer>) => MutableModel<Volunteer> | void): Volunteer;
}

export declare class VolunteerMonthlySummary {
  readonly id: string;
  readonly Namebwe: string;
  readonly Namevol: string;
  readonly date?: string;
  readonly NoWaterSampleTaken: number;
  readonly NoLsn1TaughtAsPrimaryInstr: number;
  readonly NoLsn1TaughtAssistingSWE: number;
  readonly NoPersonsTaughtLesson1ByVol: number;
  readonly NoLsn2TaughtAsPrimaryInstr: number;
  readonly NoLsn2TaughtAssistingSWE: number;
  readonly NoPersonsTaughtLesson2ByVol: number;
  readonly NoLsn3TaughtAsPrimaryInstr: number;
  readonly NoLsn3TaughtAssistingSWE: number;
  readonly NoPersonsTaughtLesson3ByVol: number;
  readonly NoLsn4TaughtAsPrimaryInstr: number;
  readonly NoLsn4TaughtAssistingSWE: number;
  readonly NoPersonsTaughtLesson4ByVol: number;
  readonly NoPersonsTaughtByVol: number;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<VolunteerMonthlySummary>);
  static copyOf(source: VolunteerMonthlySummary, mutator: (draft: MutableModel<VolunteerMonthlySummary>) => MutableModel<VolunteerMonthlySummary> | void): VolunteerMonthlySummary;
}

export declare class Meeting {
  readonly id: string;
  readonly Country: string;
  readonly Community: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly Namevol: string;
  readonly DiscussionsTaught: string;
  constructor(init: ModelInit<Meeting>);
  static copyOf(source: Meeting, mutator: (draft: MutableModel<Meeting>) => MutableModel<Meeting> | void): Meeting;
}

export declare class HouseholdAttendingMeeting {
  readonly id: string;
  readonly Namebwe: string;
  readonly HeadHouseholdName: string;
  readonly HeadHouseholdPhoneNumber: string;
  readonly NumberOfAdults: number;
  readonly CommitedToUseAquatabs: string;
  readonly NumberOfAquaTabsReceived: number;
  readonly MeetingID: string;
  constructor(init: ModelInit<HouseholdAttendingMeeting>);
  static copyOf(source: HouseholdAttendingMeeting, mutator: (draft: MutableModel<HouseholdAttendingMeeting>) => MutableModel<HouseholdAttendingMeeting> | void): HouseholdAttendingMeeting;
}

export declare class SWEMonthlyTotalSummary {
  readonly id: string;
  readonly Namebwe: string;
  readonly date?: string;
  readonly SWEPosition: string;
  readonly NoWaterSampleTaken: number;
  readonly NoSurveysCompleted: number;
  readonly NoHealthCheck: number;
  readonly NoPublicServiceMessagesAired: number;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<SWEMonthlyTotalSummary>);
  static copyOf(source: SWEMonthlyTotalSummary, mutator: (draft: MutableModel<SWEMonthlyTotalSummary>) => MutableModel<SWEMonthlyTotalSummary> | void): SWEMonthlyTotalSummary;
}

export declare class VolunteerMonthlyTotalSummary {
  readonly id: string;
  readonly Namebwe: string;
  readonly Namevol: string;
  readonly date?: string;
  readonly NoWaterSampleTaken: number;
  readonly Completed: number;
  readonly Lat: string;
  readonly Lng: string;
  constructor(init: ModelInit<VolunteerMonthlyTotalSummary>);
  static copyOf(source: VolunteerMonthlyTotalSummary, mutator: (draft: MutableModel<VolunteerMonthlyTotalSummary>) => MutableModel<VolunteerMonthlyTotalSummary> | void): VolunteerMonthlyTotalSummary;
}