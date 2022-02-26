// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AnswerType = {
  "TEXTVALUE": "TEXTVALUE",
  "ENUMVALUE": "ENUMVALUE",
  "ENUMMULTIPLEVALUE": "ENUMMULTIPLEVALUE",
  "ENUMWITHNONEVALUE": "ENUMWITHNONEVALUE",
  "ENUMDROPDOWNVALUE": "ENUMDROPDOWNVALUE",
  "NUMBERVALUE": "NUMBERVALUE",
  "DATEVALUE": "DATEVALUE"
};

const { InitialSurvey, InitialSurveyDeleteControl, FollowUpSurvey, HealthCheckSurvey, SWEMonthlySummary, HouseholdWaterTest, CommunityWaterTest, CommunityWater, ConfigDefinitions, BWFSURVEYTOTALS, VolunteerHouseholdWaterTest, VolunteerHousehold, Volunteer, VolunteerMonthlySummary, Meeting, HouseholdAttendingMeeting, SWEMonthlyTotalSummary, VolunteerMonthlyTotalSummary } = initSchema(schema);

export {
  InitialSurvey,
  InitialSurveyDeleteControl,
  FollowUpSurvey,
  HealthCheckSurvey,
  SWEMonthlySummary,
  HouseholdWaterTest,
  CommunityWaterTest,
  CommunityWater,
  ConfigDefinitions,
  BWFSURVEYTOTALS,
  VolunteerHouseholdWaterTest,
  VolunteerHousehold,
  Volunteer,
  VolunteerMonthlySummary,
  Meeting,
  HouseholdAttendingMeeting,
  SWEMonthlyTotalSummary,
  VolunteerMonthlyTotalSummary,
  AnswerType
};