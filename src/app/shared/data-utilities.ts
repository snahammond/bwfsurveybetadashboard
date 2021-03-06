import { APIService, CreateCommunityWaterTestInput, CreateHouseholdWaterTestInput, DeleteCommunityWaterTestInput, DeleteFollowUpSurveyInput, DeleteHealthCheckSurveyInput, DeleteHouseholdAttendingMeetingInput, DeleteHouseholdWaterTestInput, DeleteInitialSurveyInput, DeleteMeetingInput, DeleteSWEMonthlyClinicSummaryInput, DeleteSweMonthlyClinicSummaryMutation, DeleteSWEMonthlySchoolSummaryInput, DeleteVolunteerHouseholdWaterTestInput, ModelCommunityWaterTestFilterInput, ModelConfigDefinitionsFilterInput, ModelHouseholdAttendingMeetingFilterInput, ModelStringInput } from "./services/api.service";
import { StringBuilder } from 'typescript-string-operations';
import { API, Auth } from "aws-amplify";
import { InitialSurvey } from "src/models";

let cognitoUsersGlobal = null;
let monthlyEducationMeetingGlobal = null;

export async function getInitialSurvey(api: APIService):Promise<any>{
    
    let initialSurveys: any = [];
    let promiseInitialSurveysDone = await loadInitialSurveys(null,api);
    if(promiseInitialSurveysDone.items!=null){
      for(let initialSurvey of promiseInitialSurveysDone.items){
        if(!initialSurvey._deleted)
          initialSurveys.push(initialSurvey);
      }
    }   
    //initialSurveys.push(...promiseInitialSurveysDone.items);    
    
    while(promiseInitialSurveysDone.nextToken){ 
        promiseInitialSurveysDone = await loadInitialSurveys(promiseInitialSurveysDone.nextToken,api);
        if(promiseInitialSurveysDone.items!=null){
          for(let initialSurvey of promiseInitialSurveysDone.items){
            if(!initialSurvey._deleted)
              initialSurveys.push(initialSurvey);
          }
        } 
        //initialSurveys.push(...promiseInitialSurveysDone.items);
    }
    
    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let initailSurvey of initialSurveys){        
        initailSurvey["FullNameSwe"]=cognitoUsers[initailSurvey["Namebwe"]];        
      }
    }

    return <any>(initialSurveys);
}

export async function deleteInitialSurvey(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteInitialSurveyInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteInitialSurvey(input);

  return promiseDelete;
}

export async function loadInitialSurveys(nextToken: any,api: APIService):Promise<any>{    
    let promiseInitialSurveys: any;
    if(nextToken){
      promiseInitialSurveys = api.ListInitialSurveys(null,null,nextToken);
    }else{
      promiseInitialSurveys = api.ListInitialSurveys(null,null,null);
    }
    return promiseInitialSurveys;    
}

export async function getFollowupSurvey(api: APIService):Promise<any>{
    let followupSurveys: any = [];
    let promiseFollowupSurveysDone = await loadFollowupSurveys(null,api);
    if(promiseFollowupSurveysDone.items!=null){
      for(let followupSurvey of promiseFollowupSurveysDone.items){
        if(!followupSurvey._deleted)
        followupSurveys.push(followupSurvey);
      }
    }
    //followupSurveys.push(...promiseFollowupSurveysDone.items);    
    
    while(promiseFollowupSurveysDone.nextToken){ 
        promiseFollowupSurveysDone = await loadFollowupSurveys(promiseFollowupSurveysDone.nextToken,api);
        if(promiseFollowupSurveysDone.items!=null){
          for(let followupSurvey of promiseFollowupSurveysDone.items){
            if(!followupSurvey._deleted)
            followupSurveys.push(followupSurvey);
          }
        }
        //followupSurveys.push(...promiseFollowupSurveysDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let followupSurvey of followupSurveys){        
        followupSurvey["FullNameSwe"]=cognitoUsers[followupSurvey["Namebwe"]];        
      }
    }

    return <any>(followupSurveys);
}

export async function deleteFollowUpSurvey(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteFollowUpSurveyInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteFollowUpSurvey(input);

  return promiseDelete;
}

export async function loadFollowupSurveys(nextToken: any,api: APIService):Promise<any>{    
    let promiseFollowupSurveys: any;
    if(nextToken){
        promiseFollowupSurveys = api.ListFollowUpSurveys(null,null,nextToken);
    }else{
        promiseFollowupSurveys = api.ListFollowUpSurveys(null,null,null);
    }
    return promiseFollowupSurveys;    
}

export async function getCommunityWaterTest(api: APIService):Promise<any>{
    let communityWaterTests: any = [];
    let promiseCommunityWaterTestDone = await loadCommunityWaterTests(null,api);
    if(promiseCommunityWaterTestDone.items!=null){
      for(let communityWaterTest of promiseCommunityWaterTestDone.items){
        if(!communityWaterTest._deleted)
        communityWaterTests.push(communityWaterTest);
      }
    }
    //communityWaterTests.push(...promiseCommunityWaterTestDone.items);    
    
    while(promiseCommunityWaterTestDone.nextToken){ 
        promiseCommunityWaterTestDone = await loadCommunityWaterTests(promiseCommunityWaterTestDone.nextToken,api);
        if(promiseCommunityWaterTestDone.items!=null){
          for(let communityWaterTest of promiseCommunityWaterTestDone.items){
            if(!communityWaterTest._deleted)
            communityWaterTests.push(communityWaterTest);
          }
        }
        //communityWaterTests.push(...promiseCommunityWaterTestDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let communityWaterTest of communityWaterTests){        
        communityWaterTest["FullNameSwe"]=cognitoUsers[communityWaterTest["Namebwe"]];        
      }
    }

    return <any>(communityWaterTests);
}

export async function deleteCommunityWaterTest(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteCommunityWaterTestInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteCommunityWaterTest(input);

  return promiseDelete;
}

export async function loadCommunityWaterTests(nextToken: any,api: APIService):Promise<any>{    
    let promiseCommunityWaterTests: any;
    if(nextToken){
        promiseCommunityWaterTests = api.ListCommunityWaterTests(null,null,nextToken);
    }else{
        promiseCommunityWaterTests = api.ListCommunityWaterTests(null,null,null);
    }
    return promiseCommunityWaterTests;    
}

export async function getHouseholdWaterTestSWE(api: APIService):Promise<any>{
    let householdWaterTestsSWE: any = [];
    let promiseHouseholdWaterTestsSWEDone = await loadHouseholdWaterTestsSWE(null,api);
    if(promiseHouseholdWaterTestsSWEDone.items!=null){
      for(let householdWaterTestSWE of promiseHouseholdWaterTestsSWEDone.items){
        if(!householdWaterTestSWE._deleted)
          householdWaterTestsSWE.push(householdWaterTestSWE);
      }
    }
    //householdWaterTestsSWE.push(...promiseHouseholdWaterTestsSWEDone.items);    
    
    while(promiseHouseholdWaterTestsSWEDone.nextToken){ 
        promiseHouseholdWaterTestsSWEDone = await loadHouseholdWaterTestsSWE(promiseHouseholdWaterTestsSWEDone.nextToken,api);
        if(promiseHouseholdWaterTestsSWEDone.items!=null){
          for(let householdWaterTestSWE of promiseHouseholdWaterTestsSWEDone.items){
            if(!householdWaterTestSWE._deleted)
              householdWaterTestsSWE.push(householdWaterTestSWE);
          }
        }
        //householdWaterTestsSWE.push(...promiseHouseholdWaterTestsSWEDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let householdWaterTestSWE of householdWaterTestsSWE){        
        householdWaterTestSWE["FullNameSwe"]=cognitoUsers[householdWaterTestSWE["Namebwe"]];        
      }
    }

    return <any>(householdWaterTestsSWE);
}

export async function deleteHouseholdWaterTestSWE(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteHouseholdWaterTestInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteHouseholdWaterTest(input);

  return promiseDelete;
}

export async function loadHouseholdWaterTestsSWE(nextToken: any,api: APIService):Promise<any>{    
    let promiseHouseholdWaterTestsSWE: any;
    if(nextToken){
        promiseHouseholdWaterTestsSWE = api.ListHouseholdWaterTests(null,null,nextToken);
    }else{
        promiseHouseholdWaterTestsSWE = api.ListHouseholdWaterTests(null,null,null);
    }
    return promiseHouseholdWaterTestsSWE;    
}

export async function getHouseholdWaterTestsVol(api: APIService):Promise<any>{
    let householdWaterTestsVol: any = [];
    let promiseHouseholdWaterTestsVolDone = await loadHouseholdWaterTestsVol(null,api);
    if(promiseHouseholdWaterTestsVolDone.items!=null){
      for(let householdWaterTestVol of promiseHouseholdWaterTestsVolDone.items){
        if(!householdWaterTestVol._deleted)
        householdWaterTestsVol.push(householdWaterTestVol);
      }
    }
    //householdWaterTestsVol.push(...promiseHouseholdWaterTestsVolDone.items);    
    
    while(promiseHouseholdWaterTestsVolDone.nextToken){ 
        promiseHouseholdWaterTestsVolDone = await loadHouseholdWaterTestsVol(promiseHouseholdWaterTestsVolDone.nextToken,api);
        if(promiseHouseholdWaterTestsVolDone.items!=null){
          for(let householdWaterTestVol of promiseHouseholdWaterTestsVolDone.items){
            if(!householdWaterTestVol._deleted)
            householdWaterTestsVol.push(householdWaterTestVol);
          }
        }
        //householdWaterTestsVol.push(...promiseHouseholdWaterTestsVolDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let householdWaterTestVol of householdWaterTestsVol){        
        householdWaterTestVol["FullNameSwe"]=cognitoUsers[householdWaterTestVol["Namebwe"]];        
      }
    }

    return <any>(householdWaterTestsVol);
}

export async function deleteHouseholdWaterTestVol(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteVolunteerHouseholdWaterTestInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteVolunteerHouseholdWaterTest(input);

  return promiseDelete;
}

export async function loadHouseholdWaterTestsVol(nextToken: any,api: APIService):Promise<any>{    
    let promiseHouseholdWaterTestsVol: any;
    if(nextToken){
        promiseHouseholdWaterTestsVol = api.ListVolunteerHouseholdWaterTests(null,null,nextToken);
    }else{
        promiseHouseholdWaterTestsVol = api.ListVolunteerHouseholdWaterTests(null,null,null);
    }
    return promiseHouseholdWaterTestsVol;    
}

export async function getHealthSurveys(api: APIService):Promise<any>{
    let healthSurveys: any = [];
    let promiseHealthSurveysDone = await loadHealthSurveys(null,api);
    if(promiseHealthSurveysDone.items!=null){
      for(let healthSurvey of promiseHealthSurveysDone.items){
        if(!healthSurvey._deleted)
        healthSurveys.push(healthSurvey);
      }
    }
    //healthSurveys.push(...promiseHealthSurveysDone.items);    
    
    while(promiseHealthSurveysDone.nextToken){ 
        promiseHealthSurveysDone = await loadHealthSurveys(promiseHealthSurveysDone.nextToken,api);
        if(promiseHealthSurveysDone.items!=null){
          for(let healthSurvey of promiseHealthSurveysDone.items){
            if(!healthSurvey._deleted)
            healthSurveys.push(healthSurvey);
          }
        }
        //healthSurveys.push(...promiseHealthSurveysDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let healthSurvey of healthSurveys){        
        healthSurvey["FullNameSwe"]=cognitoUsers[healthSurvey["Namebwe"]];        
      }
    }

    return <any>(healthSurveys);
}

export async function deleteHealthSurvey(api: APIService, id: string, _version: number): Promise<any>{

  let input:DeleteHealthCheckSurveyInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteHealthCheckSurvey(input);

  return promiseDelete;
}

export async function loadHealthSurveys(nextToken: any,api: APIService):Promise<any>{    
    let promiseHealthSurveys: any;
    if(nextToken){
        promiseHealthSurveys = api.ListHealthCheckSurveys(null,null,nextToken);
    }else{
        promiseHealthSurveys = api.ListHealthCheckSurveys(null,null,null);
    }
    return promiseHealthSurveys;    
}

export async function getSWEMonthlyActivities(api: APIService):Promise<any>{
    let SWEMonthlyActivities: any = [];
    let promiseSWEMonthlyActivitiesDone = await loadSWEMonthlyActivities(null,api);
    SWEMonthlyActivities.push(...promiseSWEMonthlyActivitiesDone.items);    
    
    while(promiseSWEMonthlyActivitiesDone.nextToken){ 
        promiseSWEMonthlyActivitiesDone = await loadSWEMonthlyActivities(promiseSWEMonthlyActivitiesDone.nextToken,api);
        SWEMonthlyActivities.push(...promiseSWEMonthlyActivitiesDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let SWEMonthlyActivity of SWEMonthlyActivities){        
        SWEMonthlyActivity["FullNameSwe"]=cognitoUsers[SWEMonthlyActivity["Namebwe"]];        
      }
    }

    return <any>(SWEMonthlyActivities);
}

export async function loadSWEMonthlyActivities(nextToken: any,api: APIService):Promise<any>{    
    let promiseSWEMonthlyActivities: any;
    if(nextToken){
        promiseSWEMonthlyActivities = api.ListSweMonthlySummarys(null,null,nextToken);
    }else{
        promiseSWEMonthlyActivities = api.ListSweMonthlySummarys(null,null,null);
    }
    return promiseSWEMonthlyActivities;    
}

export async function getVolMonthlyActivities(api: APIService):Promise<any>{
    let VolMonthlyActivities: any = [];
    let promiseVolMonthlyActivitiesDone = await loadVolMonthlyActivities(null,api);
    VolMonthlyActivities.push(...promiseVolMonthlyActivitiesDone.items);    
    
    while(promiseVolMonthlyActivitiesDone.nextToken){ 
        promiseVolMonthlyActivitiesDone = await loadVolMonthlyActivities(promiseVolMonthlyActivitiesDone.nextToken,api);
        VolMonthlyActivities.push(...promiseVolMonthlyActivitiesDone.items);
    }

    //add name of SWE
    let cognitoUsers = await listCognitoUsers();
    if(cognitoUsers!=null){      
      for(let VolMonthlyActivity of VolMonthlyActivities){        
        VolMonthlyActivity["FullNameSwe"]=cognitoUsers[VolMonthlyActivity["Namebwe"]];        
      }
    }

    return <any>(VolMonthlyActivities);
}

export async function loadVolMonthlyActivities(nextToken: any,api: APIService):Promise<any>{    
    let promiseVolMonthlyActivities: any;
    if(nextToken){
        promiseVolMonthlyActivities = api.ListVolunteerMonthlySummarys(null,null,nextToken);
    }else{
        promiseVolMonthlyActivities = api.ListVolunteerMonthlySummarys(null,null,null);
    }
    return promiseVolMonthlyActivities;    
}

export async function getMonthlyEducationSummaries(api: APIService):Promise<any>{
  let monthlyEducationSummaries: any = [];
  let promiseMonthlyActivitiesDone = await loadMonthlyEducationSummaries(null,api);
  if(promiseMonthlyActivitiesDone.items!=null){
    for(let monthlyEducationSummary of promiseMonthlyActivitiesDone.items){
      if(!monthlyEducationSummary._deleted)
      monthlyEducationSummaries.push(monthlyEducationSummary);
    }
  }
  //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);    
  
  while(promiseMonthlyActivitiesDone.nextToken){ 
    promiseMonthlyActivitiesDone = await loadMonthlyEducationSummaries(promiseMonthlyActivitiesDone.nextToken,api);
    if(promiseMonthlyActivitiesDone.items!=null){
      for(let monthlyEducationSummary of promiseMonthlyActivitiesDone.items){
        if(!monthlyEducationSummary._deleted)
        monthlyEducationSummaries.push(monthlyEducationSummary);
      }
    }
    //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);
  }

  //add name of SWE
  let cognitoUsers = await listCognitoUsers();
  if(cognitoUsers!=null){      
    for(let monthlyEducationSummary of monthlyEducationSummaries){        
      monthlyEducationSummary["FullNameSwe"]=cognitoUsers[monthlyEducationSummary["Namebwe"]];        
    }
  }

  return <any>(monthlyEducationSummaries);
}

export async function loadMonthlyEducationSummaries(nextToken: any, api: APIService):Promise<any>{
  let promiseMonthlyActivities: any;
  if(nextToken){
    promiseMonthlyActivities = api.ListMeetings(null,null,nextToken);
  }else{
    promiseMonthlyActivities = api.ListMeetings(null,null,null);
  }
  return promiseMonthlyActivities;

}

export async function deleteMonthlyEducationSummary(api: APIService, id: string, _version: number): Promise<any>{
  let input:DeleteMeetingInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteMeeting(input);

  monthlyEducationMeetingGlobal = null;

  return promiseDelete;
}

export async function getMonthlySchoolSummaries(api: APIService):Promise<any>{
  let monthlySchoolSummaries: any = [];
  let promiseMonthlyActivitiesDone = await loadMonthlySchoolSummaries(null,api);
  if(promiseMonthlyActivitiesDone.items!=null){
    for(let monthlySchoolSummary of promiseMonthlyActivitiesDone.items){
      if(!monthlySchoolSummary._deleted)
      monthlySchoolSummaries.push(monthlySchoolSummary);
    }
  }
  //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);    
  
  while(promiseMonthlyActivitiesDone.nextToken){ 
    promiseMonthlyActivitiesDone = await loadMonthlySchoolSummaries(promiseMonthlyActivitiesDone.nextToken,api);
    if(promiseMonthlyActivitiesDone.items!=null){
      for(let monthlySchoolSummary of promiseMonthlyActivitiesDone.items){
        if(!monthlySchoolSummary._deleted)
        monthlySchoolSummaries.push(monthlySchoolSummary);
      }
    }
    //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);
  }

  //add name of SWE
  let cognitoUsers = await listCognitoUsers();
  if(cognitoUsers!=null){      
    for(let monthlySchoolSummary of monthlySchoolSummaries){        
      monthlySchoolSummary["FullNameSwe"]=cognitoUsers[monthlySchoolSummary["Namebwe"]];        
    }
  }

  return <any>(monthlySchoolSummaries);
}

export async function loadMonthlySchoolSummaries(nextToken: any, api: APIService):Promise<any>{
  let promiseMonthlyActivities: any;
  if(nextToken){
    promiseMonthlyActivities = api.ListSweMonthlySchoolSummarys(null,null,nextToken);
  }else{
    promiseMonthlyActivities = api.ListSweMonthlySchoolSummarys(null,null,null);
  }
  return promiseMonthlyActivities;

}

export async function deleteMonthlySchoolSummary(api: APIService, id: string, _version: number): Promise<any>{
  let input:DeleteSWEMonthlySchoolSummaryInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteSweMonthlySchoolSummary(input);

  return promiseDelete;
}

export async function getMonthlyHealthClinicSummaries(api: APIService):Promise<any>{
  let monthlyHealthClinicSummaries: any = [];
  let promiseMonthlyActivitiesDone = await loadMonthlyHealthClinicSummaries(null,api);
  if(promiseMonthlyActivitiesDone.items!=null){
    for(let monthlyHealthClinicSummary of promiseMonthlyActivitiesDone.items){
      if(!monthlyHealthClinicSummary._deleted)
      monthlyHealthClinicSummaries.push(monthlyHealthClinicSummary);
    }
  }
  //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);    
  
  while(promiseMonthlyActivitiesDone.nextToken){ 
    promiseMonthlyActivitiesDone = await loadMonthlyHealthClinicSummaries(promiseMonthlyActivitiesDone.nextToken,api);
    if(promiseMonthlyActivitiesDone.items!=null){
      for(let monthlyHealthClinicSummary of promiseMonthlyActivitiesDone.items){
        if(!monthlyHealthClinicSummary._deleted)
        monthlyHealthClinicSummaries.push(monthlyHealthClinicSummary);
      }
    }
    //monthlyEducationSummaries.push(...promiseMonthlyActivitiesDone.items);
  }

  //add name of SWE
  let cognitoUsers = await listCognitoUsers();
  if(cognitoUsers!=null){      
    for(let monthlyHealthClinicSummary of monthlyHealthClinicSummaries){        
      monthlyHealthClinicSummary["FullNameSwe"]=cognitoUsers[monthlyHealthClinicSummary["Namebwe"]];        
    }
  }

  return <any>(monthlyHealthClinicSummaries);
}

export async function loadMonthlyHealthClinicSummaries(nextToken: any, api: APIService):Promise<any>{
  let promiseMonthlyActivities: any;
  if(nextToken){
    promiseMonthlyActivities = api.ListSweMonthlyClinicSummarys(null,null,nextToken);
  }else{
    promiseMonthlyActivities = api.ListSweMonthlyClinicSummarys(null,null,null);
  }
  return promiseMonthlyActivities;

}

export async function deleteMonthlyHealthClinicSummary(api: APIService, id: string, _version: number): Promise<any>{
  let input:DeleteSWEMonthlyClinicSummaryInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteSweMonthlyClinicSummary(input);

  return promiseDelete;
}

export async function getMonthlyHouseholdsAttendingMeeting(api: APIService,meetingId: string):Promise<any>{
  let monthlyHouseholdsAttendingMeeting: any = [];
  let promiseMonthlyHouseholdAtendingMeetingDone = await loadMonthlyHouseholdsAttendingMeeting(null,api,meetingId);
  if(promiseMonthlyHouseholdAtendingMeetingDone.items!=null){
    for(let monthlyHouseholdAttendingMeeting of promiseMonthlyHouseholdAtendingMeetingDone.items){
      if(!monthlyHouseholdAttendingMeeting._deleted)
      monthlyHouseholdsAttendingMeeting.push(monthlyHouseholdAttendingMeeting);
    }
  }
  //monthlyHouseholdsAttendingMeeting.push(...promiseMonthlyHouseholdAtendingMeetingDone.items);    
  
  while(promiseMonthlyHouseholdAtendingMeetingDone.nextToken){ 
    promiseMonthlyHouseholdAtendingMeetingDone = await loadMonthlyHouseholdsAttendingMeeting(promiseMonthlyHouseholdAtendingMeetingDone.nextToken,api,meetingId);
    if(promiseMonthlyHouseholdAtendingMeetingDone.items!=null){
      for(let monthlyHouseholdAttendingMeeting of promiseMonthlyHouseholdAtendingMeetingDone.items){
        if(!monthlyHouseholdAttendingMeeting._deleted)
        monthlyHouseholdsAttendingMeeting.push(monthlyHouseholdAttendingMeeting);
      }
    }
    //monthlyHouseholdsAttendingMeeting.push(...promiseMonthlyHouseholdAtendingMeetingDone.items);
  }

  //add name of SWE and extra meeting data   
  let cognitoUsers = await listCognitoUsers();

  if(monthlyEducationMeetingGlobal==null){
    monthlyEducationMeetingGlobal = await getMonthlyEducationSummaries(api);    
  }
  
  if(cognitoUsers!=null){      
    for(let monthlyHouseholdAttendingMeeting of monthlyHouseholdsAttendingMeeting){        
      monthlyHouseholdAttendingMeeting["FullNameSwe"]=cognitoUsers[monthlyHouseholdAttendingMeeting["Namebwe"]];
      
      if(monthlyEducationMeetingGlobal!=null){
        let meeting = await GetEducationMeetingExtraData(monthlyHouseholdAttendingMeeting["MeetingID"]);
        if(meeting!=null)
          monthlyHouseholdAttendingMeeting["MeetingDate"] = meeting["date"];
      }
            
    }
  }

  return <any>(monthlyHouseholdsAttendingMeeting);
}

export async function loadMonthlyHouseholdsAttendingMeeting(nextToken: any, api: APIService,meetingId: string):Promise<any>{
  let promiseMonthlyHouseholdAttendingMeeting: any;  
  let filterHouseholdAttendingMeeting:ModelHouseholdAttendingMeetingFilterInput = null;
  if(meetingId!=null){
    filterHouseholdAttendingMeeting = {
      MeetingID: {eq:meetingId}
    };
  }  

  if(nextToken){
    promiseMonthlyHouseholdAttendingMeeting = api.ListHouseholdAttendingMeetings(filterHouseholdAttendingMeeting,null,nextToken);
  }else{
    promiseMonthlyHouseholdAttendingMeeting = api.ListHouseholdAttendingMeetings(filterHouseholdAttendingMeeting,null,null);
  }
  return promiseMonthlyHouseholdAttendingMeeting;

}

export async function deleteHouseholdAttendingMeeting(api: APIService, id: string, _version: number): Promise<any>{
  let input:DeleteHouseholdAttendingMeetingInput = {
    id: id,
    _version : _version
  }

  let promiseDelete = api.DeleteHouseholdAttendingMeeting(input);

  return promiseDelete;
}

export function getHeadHouseholdSexDescription(rowData){
    let result:string = "";
    switch(rowData.HeadHouseholdSex) { 
      case "MALE": { 
        result = "Male"; 
        break; 
      } 
      case "FEMALE": { 
        result = "Female";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      } 
   } 
   return result;
}

export function getHeadHouseholdMaritalStatusDescription(rowData){
  let result:string = "";
  switch(rowData.HeadHouseholdMaritalStatus) { 
    case "MARRIED": { 
      result = "Married"; 
      break; 
    } 
    case "SINGLE": { 
      result = "Single";  
      break; 
    } 
    case "WIDOWED": { 
      result = "Widowed"; 
      break; 
    } 
    case "DIVORCED": { 
      result = "Divorced";  
      break; 
    }
    case "COHABITATING": { 
      result = "Cohabitating";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHeadHouseholdOccupationDescription(rowData){
  let result:string = "";
  switch(rowData.HeadHouseholdOccupation) { 
    case "FARMER": { 
      result = "Farmer"; 
      break; 
    } 
    case "TRADER": { 
      result = "Trader";  
      break; 
    } 
    case "TEACHER": { 
      result = "Teacher"; 
      break; 
    } 
    case "FISHERMAN": { 
      result = "Fisherman";  
      break; 
    }
    case "CIVILSERVANT": { 
      result = "civil servant (works for government)";  
      break; 
    } 
    case "NONE": { 
      result = "None"; 
      break; 
    } 
    case "OTHER": { 
      result = "Other";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHeadHouseholdEducationDescription(rowData) {    
  let result:string = "";
  switch(rowData.HeadHouseholdEducation) { 
    case "NOFORMALEDUCATION": { 
      result = "No formal education"; 
      break; 
    } 
    case "SOMEPRIMARYSCHOOL": { 
      result = "Some primary school";  
      break; 
    } 
    case "COMPLETEDPRIMARYSCHOOL": { 
      result = "Completed primary school"; 
      break; 
    } 
    case "SOMEJRHIGHSCHOOL": { 
      result = "Some Jr. High school";  
      break; 
    }
    case "COMPLETEDJRHIGHSCHOOL": { 
      result = "Completed Jr. High school";  
      break; 
    } 
    case "SOMESRHIGHSCHOOL": { 
      result = "Some Sr. High School"; 
      break; 
    } 
    case "COMPLETEDSRHIGHSCHOOL": { 
      result = "Completed Sr. High School";  
      break; 
    }
    case "SOMEEDUCATIONBEYONDHIGHSCHOOL": { 
      result = "Some education beyond High School";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getPersonBeingInterviewedDescription(rowData){
  let result:string = "";
  switch(rowData.PersonBeingInterviewed) { 
    case "FATHER": { 
      result = "Father"; 
      break; 
    } 
    case "MOTHER": { 
      result = "Mother";  
      break; 
    } 
    case "UNCLE": { 
      result = "Uncle"; 
      break; 
    } 
    case "AUNT": { 
      result = "Aunt";  
      break; 
    }
    case "SISTER": { 
      result = "Sister";  
      break; 
    } 
    case "BROTHER": { 
      result = "Brother"; 
      break; 
    } 
    case "GRANDFATHER": { 
      result = "Grandfather";  
      break; 
    }
    case "GRANDMOTHER": { 
      result = "Grandmother";  
      break; 
    } 
    case "SONDAUGHTER": { 
      result = "Son/Daughter"; 
      break; 
    } 
    case "SELF": { 
      result = "Myself (I am the only member of the household)";  
      break; 
    }
    case "OTHER": { 
      result = "Other";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getReasonNoSchoolChildren5_17YearDescription(rowData){    
  let result:string = "";

  let resultBuilder = new StringBuilder();    
  if(rowData.ReasonNoSchoolChildren5_17Year){
    let allSelectedReasonNoSchoolChildren5_17Year:string[] = rowData.ReasonNoSchoolChildren5_17Year.split(",");
  
    allSelectedReasonNoSchoolChildren5_17Year.forEach(element => {
      switch(element) { 
        case "DAILYLABOR": { 
          resultBuilder.Append("Daily labor,"); 
          break; 
        } 
        case "NOTENOUGHFUNDSSCHOOLMATERIALSCLOTHES": { 
          resultBuilder.Append("Not enough funds for school materials/clothes,");  
          break; 
        } 
        case "SCHOOLTOOFARAWAY": { 
          resultBuilder.Append("School too far away,"); 
          break; 
        } 
        case "SUPPORTFAMILYWITHLABOR": { 
          resultBuilder.Append("Support family with labor,");  
          break; 
        }
        case "FETCHINGWATER": { 
          resultBuilder.Append("Fetching water,");  
          break; 
        } 
        case "FINISHEDJRHIGHSCHOOL": { 
          resultBuilder.Append("Finished Jr. High School,"); 
          break; 
        } 
        case "MARRIAGEANDORPREGNANCY": { 
          resultBuilder.Append("Marriage and/or pregnancy,");  
          break; 
        }
        case "DISABLEDCRIPPLEDBLINDMENTALRETARDATION": { 
          resultBuilder.Append("Disabled (Crippled, blind, mental retardation),");  
          break; 
        } 
        case "NOTAPPLICABLE": { 
          resultBuilder.Append("Not applicable"); 
          break; 
        }
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
      }
    });
  }
  

  result = resultBuilder.ToString();
   
 return result;    
}

export function getMainSourceDrinkingWaterDescription(rowData){
  let result:string = "";
  switch(rowData.MainSourceDrinkingWater) { 
    case "PIPEDWATER": { 
      result = "Piped water to house/yard"; 
      break; 
    } 
    case "PUBLICSTANDPIPE": { 
      result = "Public Standpipe";  
      break; 
    } 
    case "DRILLEDBOREHOLE": { 
      result = "Drilled Borehole"; 
      break; 
    } 
    case "PROTECTEDCOVEREDHANDDUGWELL": { 
      result = "Protected/Covered Hand-dug well";  
      break; 
    }
    case "UNPROTECTEDOPENHANDDUGWELL": { 
      result = "Unprotected/Open Hand-dug well";  
      break; 
    } 
    case "RIVERPONDSMALLSTREAM": { 
      result = "River/Pond/Small Stream"; 
      break; 
    } 
    case "RAINWATERCOLLECTION": { 
      result = "Rainwater Collection";  
      break; 
    }
    case "SACHETBOTTLEDWATER": { 
      result = "Sachet/Bottled water";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getMainSourceOtherPurposeWaterDescription(rowData){
  let result:string = "";
  switch(rowData.MainSourceOtherPurposeWater) { 
    case "PIPEDWATER": { 
      result = "Piped water to house/yard"; 
      break; 
    } 
    case "PUBLICSTANDPIPE": { 
      result = "Public Standpipe";  
      break; 
    } 
    case "DRILLEDBOREHOLE": { 
      result = "Drilled Borehole"; 
      break; 
    } 
    case "PROTECTEDCOVEREDHANDDUGWELL": { 
      result = "Protected/Covered Hand-dug well";  
      break; 
    }
    case "UNPROTECTEDOPENHANDDUGWELL": { 
      result = "Unprotected/Open Hand-dug well";  
      break; 
    } 
    case "RIVERPONDSMALLSTREAM": { 
      result = "River/Pond/Small Stream"; 
      break; 
    } 
    case "RAINWATERCOLLECTION": { 
      result = "Rainwater Collection";  
      break; 
    }
    case "SACHETBOTTLEDWATER": { 
      result = "Sachet/Bottled water";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHouseholdFrequencyAtWaterSourceDescription(rowData){    
  let result:string = "";
  switch(rowData.HouseholdFrequencyAtWaterSource) { 
    case "2ORMORETIMEPERDAY": { 
      result = "2 or more times per day"; 
      break; 
    } 
    case "ONCEDAILY": { 
      result = "Once daily";  
      break; 
    } 
    case "EVERYOTHERDAY": { 
      result = "Every other day"; 
      break; 
    } 
    case "EVERYTHIRDDAY": { 
      result = "Every 3rd day";  
      break; 
    }
    case "WEEKLY": { 
      result = "Weekly";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getUsualHouseholdWaterFetcherDescription(rowData){
  let result:string = "";
  switch(rowData.UsualHouseholdWaterFetcher) { 
    case "ADULTWOMAN": { 
      result = "Female > 15 years"; 
      break; 
    } 
    case "ADULTMAN": { 
      result = "Male > 15 years";  
      break; 
    } 
    case "FEMALECHILD_15YEAR": { 
      result = "Female child < 15 years"; 
      break; 
    } 
    case "MALECHILD_15YEAR": { 
      result = "Male child < 15 years";  
      break; 
    }
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getContainerCarryWaterDescription(rowData){
  let result:string = "";
  switch(rowData.ContainerCarryWater) { 
    case "PLASTICBOWLWITHCOVER": { 
      result = "Plastic bowl with cover"; 
      break; 
    } 
    case "PLASTICBOWLWITHOUTCOVER": { 
      result = "Plastic bowl without cover";  
      break; 
    } 
    case "METALBOWLWITHCOVER": { 
      result = "Metal bowl with cover"; 
      break; 
    } 
    case "METALBOWLWITHOUTCOVER": { 
      result = "Metal bowl without cover";  
      break; 
    }
    case "PLASTICBUCKETWITHCOVER": { 
      result = "Plastic bucket with cover";  
      break; 
    } 
    case "PLASTICBUCKETWITHOUTCOVER": { 
      result = "Plastic bucket without cover"; 
      break; 
    } 
    case "JERRYCAN": { 
      result = "Jerry can";  
      break; 
    }
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getWaterTreatmentBeforeDrinkingDescription(rowData){
  let result:string = "";
  switch(rowData.WaterTreatmentBeforeDrinking) { 
    case "YES": { 
      result = "Yes"; 
      break; 
    } 
    case "NO": { 
      result = "No";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getMainReasonNoWaterTreatmentBeforeDrinkingDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder();    
  if(rowData.MainReasonNoWaterTreatmentBeforeDrinking ){
    let allSelectedMainReasonNoWaterTreatmentBeforeDrinking:string[] = rowData.MainReasonNoWaterTreatmentBeforeDrinking.split(",");
  
    allSelectedMainReasonNoWaterTreatmentBeforeDrinking.forEach(element => {
      switch(element) { 
        case "WATERISCONSIDEREDSAFE": { 
          resultBuilder.Append("Water is considered safe,"); 
          break; 
        } 
        case "TREATMENTPRODUCTSNOTAVAILABLE": { 
          resultBuilder.Append("Treatment products are not available,");  
          break; 
        } 
        case "FIREWOODISSCARCEFORBOILING": { 
          resultBuilder.Append("Firewood is scarce for boiling,"); 
          break; 
        } 
        case "TOOEXPENSIVETOTREATWATER": { 
          resultBuilder.Append("Too expensive to treat water,");  
          break; 
        }
        case "TAKESTOOMUCHTIME": { 
          resultBuilder.Append("Takes too much time,");  
          break; 
        } 
        case "LAZINESS": { 
          resultBuilder.Append("Laziness,"); 
          break; 
        } 
        case "DONTKNOW": { 
          resultBuilder.Append("Don't  know,");  
          break; 
        }
        case "NOTAPPLICABLE": { 
          resultBuilder.Append("Not applicable"); 
          break; 
        }
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
      }
    });
  }
  

  result = resultBuilder.ToString();
   
 return result;
}

export function getWaterTreatmentMethodDescription(rowData){
  let result:string = "";
  switch(rowData.WaterTreatmentMethod) { 
    case "LETSTANDANDSETTLESTRAINTHRUCLOTHANDBOIL": { 
      result = "Let stand and settle, strain thru a cloth and Boil"; 
      break; 
    } 
    case "LETSTANDANDSETTLESTRAINTHRUCLOTHANDADDLIQUIDBLEACH_CHLORINE": { 
      result = "Let stand and settle, strain thru a cloth and Add bleach/chlorine";  
      break; 
    } 
    case "LETSTANDANDSETTLESTRAINTHRUCLOTH": { 
      result = "Let stand and settle and strain thru a cloth only"; 
      break; 
    } 
    case "METALBOWLWITHOUTCOVER": { 
      result = "Let stand and settle only";  
      break; 
    }
    case "BOIL": { 
      result = "Boil";  
      break; 
    } 
    case "ADDLIQUIDBLEACH_CHLORINE": { 
      result = "Add liquid bleach/chlorine"; 
      break; 
    } 
    case "USECHLORINETABLETS": { 
      result = "Add chlorine tablets";  
      break; 
    }
    case "USEWATERFILTER": { 
      result = "Move water thru filter";  
      break; 
    } 
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHowLongUsingWaterTreatmentDescription(rowData){
  let result:string = "";
  switch(rowData.HowLongUsingWaterTreatment) { 
    case "LESSTHAN3MONTHS": { 
      result = "Less than 3 months"; 
      break; 
    } 
    case "4_6MONTHS": { 
      result = "4-6 months";  
      break; 
    } 
    case "7_12MONTHS": { 
      result = "7-12 months"; 
      break; 
    } 
    case "MORETHAN1YEAR": { 
      result = "More than 1 year";  
      break; 
    }
    case "MORETHAN2YEARS": { 
      result = "More than 2 years";  
      break; 
    } 
    case "NOTAPPLICABLE": { 
      result = "Not applicable"; 
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getFrequencyWaterTreatmentDescription(rowData){
  let result:string = "";
  switch(rowData.FrequencyWaterTreatment) { 
    case "ALWAYS": { 
      result = "Always"; 
      break; 
    }
    case "SOMETIMES": { 
      result = "Sometimes"; 
      break; 
    } 
    case "SELDOMNEVER": { 
      result = "Seldom/Never";  
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't Know";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getWaterStorageAtHomeDescription(rowData){
  let result:string = "";
  switch(rowData.WaterStorageAtHome) { 
    case "WIDEMOUTHEDCERAMICJAR": { 
      result = "Wide mouthed ceramic jar"; 
      break; 
    } 
    case "NARROWMOUTHEDCERAMICJAR": { 
      result = "Narrow mouthed ceramic jar";  
      break; 
    } 
    case "NARROWMOUTHEDCERAMICJARWITHSPIGOT": { 
      result = "Narrow mouthed ceramic jar with spigot"; 
      break; 
    } 
    case "PLASTICJUGORJAR": { 
      result = "Plastic jug or jar";  
      break; 
    }
    case "PLASTICBARREL": { 
      result = "Plastic barrel"; 
      break; 
    } 
    case "METALBARREL": { 
      result = "Metal Barrel";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getWaterStorageContainerHaveLidDescription(rowData){
  let result:string = "";
  switch(rowData.WaterStorageContainerHaveLid) { 
    case "YES": { 
      result = "Yes"; 
      break; 
    } 
    case "NO": { 
      result = "No";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getTakingWaterFromStorageDescription(rowData){
  let result:string = "";
  switch(rowData.TakingWaterFromStorage) { 
    case "EACHPERSONUSESOWNCUP": { 
      result = "Each person uses their own cup or their hands to take water from the storage container"; 
      break; 
    } 
    case "ONECUPUSEDBYALL": { 
      result = "The same cup/dipper is used by all members for taking water for drinking";  
      break; 
    } 
    case "letIETYWAYSUSED": { 
      result = "Several ways are used for taking water from the storage container"; 
      break; 
    } 
    case "CLEANCUPFORPOURINGSTOREDWATERINTOOTHERCONTAINER": { 
      result = "A dedicated, clean cup or dipper is used for taking stored water from the storage container for pouring into another glass/cup for drinking";  
      break; 
    }
    case "WATERISTAKENBYOPENINGTHESPIGOTONTHECONTAINER": { 
      result = "Water is taken by opening the spigot on the container"; 
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't know";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    }       
  }
  return result;
}

export function getRubbishDisposalDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder();    
  if(rowData.RubbishDisposal ){
    let allSelectedRubbishDisposal:string[] = rowData.RubbishDisposal.split(",");
  
    allSelectedRubbishDisposal.forEach(element => {
      switch(element) { 
        case "RABBISHPITORGARBAGEPAIL": { 
          resultBuilder.Append("Household Rubbish pit or garbage pail,"); 
          break; 
        } 
        case "COMPOST_GARDEN_GIVETOANIMALS": { 
          resultBuilder.Append("Compost/in garden/give to animals,");  
          break; 
        } 
        case "COMMUNITYGARBAGEPIT": { 
          resultBuilder.Append("Community garbage pit,"); 
          break; 
        } 
        case "SCATTER_LITTERONTHERGROUND": { 
          resultBuilder.Append("Scatter/littered on the ground,");  
          break; 
        }
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
      }
    });
  }
  

  result = resultBuilder.ToString();
   
 return result;
}

export function getHouseholdDefecationMethodDescription(rowData){
  let result:string = "";
  switch(rowData.HouseholdDefecationMethod) { 
    case "TOILETINHOME": { 
      result = "Toilet in home"; 
      break; 
    } 
    case "PUBLICTOILET": { 
      result = "Public toilet";  
      break; 
    } 
    case "LATRINE": { 
      result = "Latrine"; 
      break; 
    } 
    case "NOFACILITYFIELDBUSHRIVERPLASTICBAG": { 
      result = "No facility, field, bush, river, plastic bag";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    }       
  }
  return result;
}

export function getWasteDisposalYoungestChildDescription(rowData){
  let result:string = "";
  switch(rowData.WasteDisposalYoungestChild) { 
    case "CHILDUSEDTOILET_LATRINE": { 
      result = "Child used toilet/latrine"; 
      break; 
    } 
    case "PUT_RINSEDINTOTOILET_LATRINE": { 
      result = "Put/rinsed into toilet/latrine";  
      break; 
    }    
    case "PUT_RINSEDINTODRAIN_DITCH": { 
      result = "Put/rinsed into drain/ditch"; 
      break; 
    }         
    case "THROWNINTOGARBAGE": { 
      result = "Was thrown into garbage";  
      break; 
    }
    case "BURIED": { 
      result = "Was buried"; 
      break; 
    } 
    case "LEFTINTHEOPEN": { 
      result = "Was left in the open";  
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't know"; 
      break; 
    } 
    case "OTHER": { 
      result = "Other";  
      break; 
    }
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    }
    default: { 
       result = ""; 
       break; 
    }       
  }
  return result;
}

export function getWashedHandsIn24HoursDescription(rowData){
  let result:string = "";
  switch(rowData.WashedHandsIn24Hours) { 
    case "YES": { 
      result = "Yes"; 
      break; 
    } 
    case "NO": { 
      result = "No";  
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't know";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getWhenWashedHandsIn24HoursDescription(rowData){
  let result:string = "";
  switch(rowData.WhenWashedHandsIn24Hours) { 
    case "AFTERDEFECATION": { 
      result = "After defecation/using latrine"; 
      break; 
    } 
    case "BEFORECOOKING": { 
      result = "Before cooking/food preparation/handling food";  
      break; 
    } 
    case "AFTERCONTACTWITHCHILDFECES": { 
      result = "After contact with child's feces/cleaning child's bottom";  
      break; 
    } 
    case "BEFOREFEEDINGTHECHILD_BREASTFEEDING": { 
      result = "Before feeding the child/breastfeeding"; 
      break; 
    } 
    case "AFTERTOUCHINGANIMALS": { 
      result = "After touching animals";  
      break; 
    } 
    case "AFTERTOUCHINGDIRTYTHINGS": { 
      result = "After touching dirty things";  
      break; 
    } 
    case "AFTERWORKINGINTHEFIELDS_GARDEN": { 
      result = "After working in the field/garden"; 
      break; 
    }       
    case "ALLTHEABOVE": { 
      result = "After all applicable options above";  
      break; 
    } 
    case "SOMEOFTHEABOVE": { 
      result = "Some of the options above";  
      break; 
    } 
    case "NONEOFTHEABOVE": { 
      result = "None of the options";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
  } 
  return result;
}

export function getWhatUsedToWashYourHandsDescription(rowData){
  let result:string = "";
  switch(rowData.WhatUsedToWashYourHands) { 
    case "HOTWATERANDSOAP": { 
      result = "Hot water and soap"; 
      break; 
    } 
    case "HOTWATER": { 
      result = "Hot water only";  
      break; 
    } 
    case "COLDWATERANDSOAP": { 
      result = "Cold water and soap";  
      break; 
    } 
    case "COLDWATERONLY": { 
      result = "Cold water only"; 
      break; 
    } 
    case "HANDSANITIZER": { 
      result = "Hand sanitizer";  
      break; 
    } 
    case "OTHER": { 
      result = "Other";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
  } 
  return result;
}

export function getCommonIllnessAffectingAllChildrenInHouseholdDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder();   
  if(rowData.CommonIllnessAffectingAllChildrenInHousehold){
    let allSelectedCommonIllnessAffectingAllChildrenInHousehold:string[] = rowData.CommonIllnessAffectingAllChildrenInHousehold.split(",");
  
    allSelectedCommonIllnessAffectingAllChildrenInHousehold.forEach(element => {
      switch(element) { 
        case "MALARIA": { 
          resultBuilder.Append("Malaria,"); 
          break; 
        } 
        case "SICKLECELLANEMIA": { 
          resultBuilder.Append("Sickle cell anemia,");  
          break; 
        } 
        case "DIARRHEA": { 
          resultBuilder.Append("Diarrhea,"); 
          break; 
        } 
        case "STOMACHPAIN": { 
          resultBuilder.Append("Stomach pain,");  
          break; 
        }
        case "RESPIRATORYINFECTION": { 
          resultBuilder.Append("Respiratory infection (Cold/flu),"); 
          break; 
        } 
        case "SKINDISEASE_SCABIES": { 
          resultBuilder.Append("Skin disease/Scabies,");  
          break; 
        } 
        case "EYEINFECTIONS_TRACHOMA": { 
          resultBuilder.Append("Eye infections/trachoma,"); 
          break; 
        } 
        case "HIV_AIDS": { 
          resultBuilder.Append("HIV/AIDS,");  
          break; 
        }
        case "TUBERCULOSIS": { 
          resultBuilder.Append("Tuberculosis,"); 
          break; 
        } 
        case "OTHER": { 
          resultBuilder.Append("Other,");  
          break; 
        } 
        case "NOTAPPLICABLE": { 
          resultBuilder.Append("Not applicable,"); 
          break; 
        }
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
      }
    });
  } 
  

  result = resultBuilder.ToString();
   
 return result;
}

export function getDidSickChildrenGoToHospitalDescription(rowData){
  let result:string = "";
  switch(rowData.DidSickChildrenGoToHospital) { 
    case "YES": { 
      result = "Yes"; 
      break; 
    } 
    case "NO": { 
      result = "No";  
      break; 
    } 
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;

}

export function getDidSickChildrenGoToHospitalYesDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder();    
  if(rowData.DidSickChildrenGoToHospitalYes ){
    let allSelectedDidSickChildrenGoToHospitalYes:string[] = rowData.DidSickChildrenGoToHospitalYes.split(",");
  
    allSelectedDidSickChildrenGoToHospitalYes.forEach(element => {
      switch(element) { 
        case "ORALREHYDRATIONSALTS": { 
          resultBuilder.Append("Oral rehydration Salts (ORS),"); 
          break; 
        } 
        case "ANTIBIOTIC": { 
          resultBuilder.Append("Antibiotics,");  
          break; 
        } 
        case "PAINKILLER": { 
          resultBuilder.Append("Pain killer,"); 
          break; 
        } 
        case "INTRAVENOUSFLUID": { 
          resultBuilder.Append("Intravenous (IV) Fluid,");  
          break; 
        }
        case "DONTKNOW": { 
          resultBuilder.Append("Don't know,"); 
          break; 
        } 
        case "NOTAPPLICABLE": { 
          resultBuilder.Append("Not applicable,");  
          break; 
        } 
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
    }
    });
  }

  result = resultBuilder.ToString();
   
 return result;
}

export function getSickChildrenBreastfeedingDescription(rowData){
  let result:string = "";
  switch(rowData.SickChildrenBreastfeeding) { 
    case "YES": { 
      result = "Yes"; 
      break; 
    } 
    case "NO": { 
      result = "No";  
      break; 
    } 
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription(rowData){
  let result:string = "";
  switch(rowData.OutcomeMostRecentVomiting_DiarrheaAtHospital) {       
    case "TREATEDANDDISCHARGED": { 
      result = "Treated and Discharged";  
      break; 
    } 
    case "DETAINEDANDDISCHARGED": { 
      result = "Detained and Discharged"; 
      break; 
    } 
    case "REFERREDANOTHERHEALTHFACILITY": { 
      result = "Referred to another health facility";  
      break; 
    } 
    case "NOTAPPLICABLE": { 
      result = "Not applicable";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHealthChangeInAYearDescription(rowData){
  let result:string = "";
  switch(rowData.HealthChangeInAYear) { 
    case "IMPROVED": { 
      result = "Improved since last year"; 
      break; 
    } 
    case "DECLINED": { 
      result = "Declined since last year";  
      break; 
    } 
    case "STAYEDSAME": { 
      result = "Stayed the same since last year";  
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't know";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHealthChangeFamilyInAYearDescription(rowData){
  let result:string = "";
  switch(rowData.HealthChangeFamilyInAYear) { 
    case "IMPROVED": { 
      result = "Improved since last year"; 
      break; 
    } 
    case "DECLINED": { 
      result = "Declined since last year";  
      break; 
    } 
    case "STAYEDSAME": { 
      result = "Stayed the same since last year";  
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don't know";  
      break; 
    } 
    default: { 
       result = ""; 
       break; 
    }  
 } 
 return result;
}

export function getChildrenDiedAfterBeingBornAliveDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder(); 
  
  if(rowData.ChildrenDiedAfterBeingBornAlive){      
    let allSelectedChildrenDiedAfterBeingBornAlive:string[] = rowData.ChildrenDiedAfterBeingBornAlive.split(",");    
    allSelectedChildrenDiedAfterBeingBornAlive.forEach(element => {
        switch(element) { 
          case "NOCHILDRENDIEDAFTERBEINGBORNALIVE": { 
            resultBuilder.Append("No children have died after being born alive,"); 
            break; 
          } 
          case "CHILDUNDER5YEARSDIED": { 
            resultBuilder.Append("Child under 5 years died,");  
            break; 
          } 
          case "MORETHANONECHILDUNDER5YEARSDIED": { 
            resultBuilder.Append("More than one child under 5 years died,"); 
            break; 
          } 
          case "CHILD5_14YEARSDIED": { 
            resultBuilder.Append("Child 5-14 years died,");  
            break; 
          }
          case "MORETHANONECHILD5_14YEARSDIED": { 
            resultBuilder.Append("More than one child 5-14 years died,"); 
            break; 
          } 
          case "AFAMILYMEMBEROLDERTHAN15YEARSDIED": { 
            resultBuilder.Append("A family member older than 15 years died,");  
            break; 
          } 
          case "MORETHANONEFAMILYMEMBEROLDERTHAN15YEARSDIED": { 
            resultBuilder.Append("More than one family member older than 15 years died,");  
            break; 
          } 
          default: { 
            resultBuilder.Append(""); 
            break; 
          } 
      }
    });
  }

  result = resultBuilder.ToString();
   
 return result;
}

export function getCausesOfChildrenDeathDescription(rowData){
  let result:string = "";

  let resultBuilder = new StringBuilder();   
  if(rowData.CausesOfChildrenDeath){ 
    let allSelectedCausesOfChildrenDeath:string[] = rowData.CausesOfChildrenDeath.split(",");
  
    allSelectedCausesOfChildrenDeath.forEach(element => {
      switch(element) { 
        case "MALARIA": { 
          resultBuilder.Append("Malaria,"); 
          break; 
        } 
        case "SICKLECELLANEMIA": { 
          resultBuilder.Append("Sickle cell anemia,");  
          break; 
        } 
        case "DIARRHEA_VOMITING": { 
          resultBuilder.Append("Diarrhea/Vomiting,"); 
          break; 
        } 
        case "STOMACHPAIN": { 
          resultBuilder.Append("Stomach pain,");  
          break; 
        }
        case "RESPIRATORYINFECTION": { 
          resultBuilder.Append("Respiratory infection (Cold/flu),"); 
          break; 
        } 
        case "SKINDISEASE_SCABIES": { 
          resultBuilder.Append("Skin disease/Scabies,");  
          break; 
        } 
        case "EYEINFECTIONS_TRACHOMA": { 
          resultBuilder.Append("Eye infections/trachoma,");  
          break; 
        } 
        case "HIV_AIDS": { 
          resultBuilder.Append("HIV/AIDS,"); 
          break; 
        } 
        case "TUBERCULOSIS": { 
          resultBuilder.Append("Tuberculosis,");  
          break; 
        } 
        case "BIRTHDEFECT": { 
          resultBuilder.Append("Birth defect,"); 
          break; 
        } 
        case "ACCIDENT": { 
          resultBuilder.Append("Accident,");  
          break; 
        }
        case "OTHER": { 
          resultBuilder.Append("Other,"); 
          break; 
        } 
        case "NOTAPPLICABLE": { 
          resultBuilder.Append("Not applicable,");  
          break; 
        } 
        default: { 
          resultBuilder.Append(""); 
          break; 
        } 
      }
    });
  }
  

  result = resultBuilder.ToString();
   
 return result;
}

export function getColilertTestResultDescription(rowData){
    let result:string = "";
    switch(rowData.ColilertTestResult) { 
      case "CLEAR": { 
        result = "Clear"; 
        break; 
      } 
      case "YELLOW": { 
        result = "Yellow";  
        break; 
      } 
      case "FLUORESCESBLUE": { 
        result = "Fluoresces blue";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      }  
   } 
   return result;
}

export function getBenefitSWPDescription(rowData){
    let result:string = "";
    switch(rowData.BenefitSWP) { 
      case "GREATBENEFIT": { 
        result = "Great benefit"; 
        break; 
      } 
      case "GOODSIZEBENEFIT": { 
        result = "Good-size benefit";  
        break; 
      } 
      case "SMALLBENEFIT": { 
        result = "Small benefit";  
        break; 
      } 
      case "NOBENEFIT": { 
        result = "No benefit";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      }  
   } 
   return result;
}

  export function getPetrifilmTestResultDescription(rowData){
    let result:string = "";
    switch(rowData.PetrifilmTestResult) { 
      case "NONE": { 
        result = "None"; 
        break; 
      } 
      case "0_10BLUECOLONIES": { 
        result = "0 - 10 blue colonies";  
        break; 
      } 
      case "MORETHAN10BLUECOLONIES": { 
        result = "More than 10 blue colonies";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      }  
   } 
   return result;
}

export function getWaterTreatment24HoursDescription(rowData){
    let result:string = "";
    switch(rowData.WaterTreatment24Hours) { 
      case "YES": { 
        result = "Yes"; 
        break; 
      } 
      case "NO": { 
        result = "No";  
        break; 
      } 
      case "NOTAPPLICABLE": { 
        result = "Not applicable";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      } 
   } 
   return result;
}

export function getMainReasonNoWaterTreatment24HourDescription(rowData){
    let result:string = "";
  
    let resultBuilder = new StringBuilder();   
    if(rowData.MainReasonNoWaterTreatment24Hour){ 
      let allSelectedMainReasonNoWaterTreatment24Hour:string[] = rowData.MainReasonNoWaterTreatment24Hour.split(",");
    
      allSelectedMainReasonNoWaterTreatment24Hour.forEach(element => {
        switch(element) { 
          case "WATERISCONSIDEREDSAFE": { 
            resultBuilder.Append("Water is considered safe,"); 
            break; 
          } 
          case "TREATMENTPRODUCTSARENOTAVAILABLE": { 
            resultBuilder.Append("Treatment products are not availablea,");  
            break; 
          } 
          case "FIREWOODISSCARCEFORBOILING": { 
            resultBuilder.Append("Firewood is scarce for boiling,"); 
            break; 
          } 
          case "TOOEXPENSIVETOTREATWATER": { 
            resultBuilder.Append("Too expensive to treat water,");  
            break; 
          }
          case "TAKESTOOMUCHTIME": { 
            resultBuilder.Append("Takes too much time,"); 
            break; 
          } 
          case "LAZINESS": { 
            resultBuilder.Append("Laziness,");  
            break; 
          } 
          case "DONTKNOW": { 
            resultBuilder.Append("Don't know,");  
            break; 
          } 
          case "NOTAPPLICABLE": { 
            resultBuilder.Append("Not applicable,"); 
            break; 
          }      
          default: { 
            resultBuilder.Append(""); 
            break; 
          } 
        }
      });
    }
  
    result = resultBuilder.ToString();
     
   return result;
}
  
export function getWaterTreatment24HourMethodDescription(rowData){
    let result:string = "";
    switch(rowData.WaterTreatment24HourMethod) { 
      case "LETSTANDANDSETTLESTRAINTHRUACLOTHANDBOIL": { 
        result = "Let stand and settle, strain thru a cloth and Boil"; 
        break; 
      } 
      case "LETSTANDANDSETTLESTRAINTHRUACLOTHANDADDLIQUIDBLEACHCHLORINE": { 
        result = "Let stand and settle, strain thru a cloth and Add liquid bleach/chlorine";  
        break; 
      } 
      case "LETSTANDANDSETTLEANDSTRAINTHRUACLOTHONLY": { 
        result = "Let stand and settle and strain thru a cloth only";  
        break; 
      }
      case "BOIL": { 
        result = "Boil";  
        break; 
      }
      case "ADDLIQUIDBLEACHCHLORINE": { 
        result = "Add liquid bleach/chlorine"; 
        break; 
      }       
      case "USECHLORINETABLETS": { 
        result = "Use chlorine tablets";  
        break; 
      }
      case "USEAWATERFILTER": { 
        result = "Use a water filter";  
        break; 
      }  
      case "NOTAPPLICABLE": { 
        result = "Not applicable";  
        break; 
      } 
      default: { 
         result = ""; 
         break; 
      } 
   } 
   return result;
}

export function getLastTimeTreatedHouseholdWaterWithChlorine(rowData){
  let result:string = "";
  switch(rowData.LastTimeTreatedHouseholdWaterWithChlorine) { 
    case "0_3DAYSAGO": { 
      result = "0-3 days ago"; 
      break; 
    } 
    case "4_7DAYSAGO": { 
      result = "4-7 days ago";  
      break; 
    } 
    case "8_14DAYSAGO": { 
      result = "8-14 days ago";  
      break; 
    }
    case "MORETHAN14DAYSAGO": { 
      result = "More than 15 days ago";  
      break; 
    }
    case "DONOTUSECHLORINETOTREATWATER": { 
      result = "Do not use chlorine to treat water"; 
      break; 
    }       
    case "DONTKNOW": { 
      result = "Don???t know";  
      break; 
    }
     
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getWhereDidYouGetChlorineToTreatHouseholdWater(rowData){
  let result:string = "";
  switch(rowData.WhereDidYouGetChlorineToTreatHouseholdWater) { 
    case "RECEIVEDFREEFROMLOCALORGANIZATION": { 
      result = "Received free from local organization"; 
      break; 
    } 
    case "RECEIVEDATLOWCOSTFROMLOCALORGANIZATION": { 
      result = "Received at low cost from local organization";  
      break; 
    } 
    case "PURCHASEDHOUSEHOLDCHLORINEBLEACHFROMMARKET": { 
      result = "Purchased household chlorine bleach from market";  
      break; 
    }
    case "PURCHASEDCHLORINEFROMLOCALVENDOR": { 
      result = "Purchased chlorine (liquid or tablets) from local vendor";  
      break; 
    }
    case "SOMEOTHERSOURCE": { 
      result = "Some other source"; 
      break; 
    }    
    case "DIDNOTUSECHLORINETOTREATHOUSEHOLDWATER": { 
      result = "Did not use chlorine to treat household water"; 
      break; 
    }    
    case "DONTKNOW": { 
      result = "Don???t know";  
      break; 
    }
     
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}

export function getHowDifficultToObtainChlorine(rowData){
  let result:string = "";
  switch(rowData.HowDifficultToObtainChlorine) { 
    case "CHLORINEISREADILYAVAILABLEANDDOESNTCOSTMUCH": { 
      result = "Chlorine is readily available and doesn???t cost much"; 
      break; 
    } 
    case "CHLORINEISAVAILABLEBUTCOSTLYTOBUY": { 
      result = "Chlorine is available locally, but is costly to buy";  
      break; 
    } 
    case "CHLORINEISHARDTOFINDORUNAVAILABLELOCALLY": { 
      result = "Chlorine is hard to find or is unavailable locally";  
      break; 
    }
    case "CHLORINEISNOTAVAILABLELOCALLY": { 
      result = "Chlorine is not available locally";  
      break; 
    }
    case "DONOTUSECHLORINETOTREATWATER": { 
      result = "Do not use chlorine to treat water"; 
      break; 
    } 
    case "DONTKNOW": { 
      result = "Don???t know";  
      break; 
    }
     
    default: { 
       result = ""; 
       break; 
    } 
 } 
 return result;
}



export async function getCountriesAndCommunities(api: APIService):Promise<any>{
  let countriesAndCommunities: any = [];
  let promiseCountriesAndCommunitiesDone = await loadCountriesAndCommunities(null,api);
  countriesAndCommunities.push(...promiseCountriesAndCommunitiesDone.items);    
  
  while(promiseCountriesAndCommunitiesDone.nextToken){ 
    promiseCountriesAndCommunitiesDone = await loadCountriesAndCommunities(promiseCountriesAndCommunitiesDone.nextToken,api);
      countriesAndCommunities.push(...promiseCountriesAndCommunitiesDone.items);
  }

  return <any>(countriesAndCommunities);
}

export async function loadCountriesAndCommunities(nextToken: any,api: APIService):Promise<any>{    
  let promiseCountriesAndCommunities: any;
  let filterCountriesAndCommunities: ModelConfigDefinitionsFilterInput = {
    type: {eq:"C"}
  };
  
  if(nextToken){
    promiseCountriesAndCommunities = api.ListConfigDefinitionss(filterCountriesAndCommunities,null,nextToken);
  }else{
    promiseCountriesAndCommunities = api.ListConfigDefinitionss(filterCountriesAndCommunities,null,null);
  }
  return promiseCountriesAndCommunities;    
}

export async function getCommunityWaterTestWithCommFilter(api: APIService, communities: any):Promise<any>{
  let communityWaterTests: any = [];
  let promiseCommunityWaterTestDone = await loadCommunityWaterTestsWithCommFilter(null,communities,api);
  communityWaterTests.push(...promiseCommunityWaterTestDone.items);    
  
  while(promiseCommunityWaterTestDone.nextToken){ 
      promiseCommunityWaterTestDone = await loadCommunityWaterTestsWithCommFilter(promiseCommunityWaterTestDone.nextToken,communities,api);
      communityWaterTests.push(...promiseCommunityWaterTestDone.items);
  }

  return <any>(communityWaterTests);
}

export async function loadCommunityWaterTestsWithCommFilter(nextToken: any,communities: any,api: APIService):Promise<any>{    
  let promiseCommunityWaterTests: any;
  
  let filterComm: ModelCommunityWaterTestFilterInput = {};
  let filterCommOr: Array<ModelCommunityWaterTestFilterInput> = [];
  communities.forEach(comm => {
    let eachCommFilter: ModelCommunityWaterTestFilterInput = {};
    let modelEachCommFilter: ModelStringInput = {};
    modelEachCommFilter.eq = comm;
    eachCommFilter.Community = modelEachCommFilter; 
    filterCommOr.push(eachCommFilter);
  });
  filterComm.or = filterCommOr;
  if(nextToken){      
      promiseCommunityWaterTests = api.ListCommunityWaterTests(filterComm,null,nextToken);
  }else{
      promiseCommunityWaterTests = api.ListCommunityWaterTests(filterComm,null,null);
  }
  return promiseCommunityWaterTests;    
}

export async function getHouseholdWaterTestWithCommFilter(api: APIService, communities: any):Promise<any>{
  let householdWaterTests: any = [];
  let promiseHouseholdWaterTestDone = await loadHouseholdWaterTestsWithCommFilter(null,communities,api);
  householdWaterTests.push(...promiseHouseholdWaterTestDone.items);    
  
  while(promiseHouseholdWaterTestDone.nextToken){ 
    promiseHouseholdWaterTestDone = await loadHouseholdWaterTestsWithCommFilter(promiseHouseholdWaterTestDone.nextToken,communities,api);
      householdWaterTests.push(...promiseHouseholdWaterTestDone.items);
  }

  return <any>(householdWaterTests);
}

export async function loadHouseholdWaterTestsWithCommFilter(nextToken: any,communities: any,api: APIService):Promise<any>{    
  let promiseHouseholdWaterTests: any;
  let filterComm: ModelCommunityWaterTestFilterInput = {};
  let filterCommOr: Array<ModelCommunityWaterTestFilterInput> = [];
  communities.forEach(comm => {
    let eachCommFilter: ModelCommunityWaterTestFilterInput = {};
    let modelEachCommFilter: ModelStringInput = {};
    modelEachCommFilter.eq = comm;
    eachCommFilter.Community = modelEachCommFilter; 
    filterCommOr.push(eachCommFilter);
  });
  filterComm.or = filterCommOr;
  if(nextToken){      
    promiseHouseholdWaterTests = api.ListHouseholdWaterTests(filterComm,null,nextToken);
  }else{
    promiseHouseholdWaterTests = api.ListHouseholdWaterTests(filterComm,null,null);
  }
  return promiseHouseholdWaterTests;    
}

export async function getVolunteerHouseholdWaterTestWithCommFilter(api: APIService, communities: any):Promise<any>{
  let volunteerHouseholdWaterTests: any = [];
  let promiseVolunteerHouseholdWaterTestDone = await loadVolunteerHouseholdWaterTestsWithCommFilter(null,communities,api);
  volunteerHouseholdWaterTests.push(...promiseVolunteerHouseholdWaterTestDone.items);    
  
  while(promiseVolunteerHouseholdWaterTestDone.nextToken){ 
    promiseVolunteerHouseholdWaterTestDone = await loadVolunteerHouseholdWaterTestsWithCommFilter(promiseVolunteerHouseholdWaterTestDone.nextToken,communities,api);
    volunteerHouseholdWaterTests.push(...promiseVolunteerHouseholdWaterTestDone.items);
  }

  return <any>(volunteerHouseholdWaterTests);
}

export async function loadVolunteerHouseholdWaterTestsWithCommFilter(nextToken: any,communities: any,api: APIService):Promise<any>{    
  let promiseVolunteerHouseholdWaterTests: any;
  let filterComm: ModelCommunityWaterTestFilterInput = {};
  let filterCommOr: Array<ModelCommunityWaterTestFilterInput> = [];
  communities.forEach(comm => {
    let eachCommFilter: ModelCommunityWaterTestFilterInput = {};
    let modelEachCommFilter: ModelStringInput = {};
    modelEachCommFilter.eq = comm;
    eachCommFilter.Community = modelEachCommFilter; 
    filterCommOr.push(eachCommFilter);
  });
  filterComm.or = filterCommOr;
  if(nextToken){      
    promiseVolunteerHouseholdWaterTests = api.ListVolunteerHouseholdWaterTests(filterComm,null,nextToken);
  }else{
    promiseVolunteerHouseholdWaterTests = api.ListVolunteerHouseholdWaterTests(filterComm,null,null);
  }
  return promiseVolunteerHouseholdWaterTests;    
}

export async function getSWEAndVolunteerHouseholdWaterTestWithCommFilter(api: APIService, communities: any):Promise<any>{
  let sweAndVolunteerhouseholdWaterTests: any = [];
  let promiseHouseholdWaterTestDone = await getHouseholdWaterTestWithCommFilter(api,communities);  
  sweAndVolunteerhouseholdWaterTests.push(...promiseHouseholdWaterTestDone);    
  
  let promiseVolunteerHouseholdWaterTestDone = await getVolunteerHouseholdWaterTestWithCommFilter(api,communities);  
  sweAndVolunteerhouseholdWaterTests.push(...promiseVolunteerHouseholdWaterTestDone);

  return <any>(sweAndVolunteerhouseholdWaterTests);
}

export type WaterIndicatorReport = {
  Name: string;
  ColilertScoreMonth1: number;
  ColilertScoreMonth3?: number;
  ColilertScoreMonth6: number;
  ColilertScoreMonth9?: number;
  ColilertScoreMonth12: number;
  PetrifilmScoreMonth1: number;
  PetrifilmScoreMonth3?: number;
  PetrifilmScoreMonth6: number;
  PetrifilmScoreMonth9?: number;
  PetrifilmScoreMonth12: number;
  AverageCombinedScoreMonth1: number;
  AverageCombinedScoreMonth3?: number;
  AverageCombinedScoreMonth6: number;
  AverageCombinedScoreMonth9?: number;
  AverageCombinedScoreMonth12: number;
};

export function convertColilertTestResult(aFilteredcommWaterTest){
  let result:number = -1;
  if(aFilteredcommWaterTest.ColilertTestResult){
    switch(aFilteredcommWaterTest.ColilertTestResult) { 
      case "CLEAR": { 
        result = 0; 
        break; 
      } 
      case "YELLOW": { 
        result = 1;  
        break; 
      } 
      case "FLUORESCESBLUE": { 
        result = 2;  
        break; 
      } 
      default: { 
         result = -1; 
         break; 
      }  
   }
  }
   
 return result;
}

export function convertPetrifilmTestResult(aFilteredcommWaterTest){
  let result:number = -1;
  if(aFilteredcommWaterTest.PetrifilmTestResult){
    switch(aFilteredcommWaterTest.PetrifilmTestResult) { 
      case "NONE": { 
        result = 0; 
        break; 
      } 
      case "0_10BLUECOLONIES": { 
        result = 1;  
        break; 
      } 
      case "MORETHAN10BLUECOLONIES": { 
        result = 2;  
        break; 
      } 
      default: { 
         result = -1; 
         break; 
      }  
   }
  }
   
 return result;
}

export async function listCognitoUsers(){
  if(cognitoUsersGlobal==null){
    
    //const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
    let restResponseUsers : any = [];
    
    let restResponse = await loadCognitoUsers(null);
    
    if(restResponse){ 
      if(restResponse.Users){
        restResponseUsers.push(...restResponse.Users);
      }

      let nextToken = restResponse.NextToken;
      while(nextToken){         
        let restResponse = await loadCognitoUsers(nextToken);
        if(restResponse.Users){
          restResponseUsers.push(...restResponse.Users);
        }
        nextToken = restResponse.NextToken;
      }
    }
    
    if(restResponseUsers!=null){    
      let cognitoUsers = {};        
      for (let cognitoUser of restResponseUsers) {
        if(cognitoUser.Attributes!=null){
          let email,firstName,lastname;
          for(let attribute of cognitoUser.Attributes){                  
            if(attribute["Name"]=="email"){                    
              email = attribute["Value"];
            }   
            if(attribute["Name"]=="family_name"){                    
              firstName = attribute["Value"];
            }  
            if(attribute["Name"]=="given_name"){
              lastname = attribute["Value"];
            }               
          }
          cognitoUsers[email]=firstName+" "+lastname;                        
        }              
      }
      cognitoUsersGlobal = cognitoUsers;          
      return cognitoUsers;
    }
    

    return null;
  }

  return cognitoUsersGlobal;
}

export async function loadCognitoUsers(nextToken){
  let apiName = 'AdminQueries';
  let path = '/listUsers';
  let authorizationToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
  
  let paginationToken = '';

  if(nextToken!=null)
    paginationToken = nextToken;

  let myInit = { 
      queryStringParameters: {
        "token": paginationToken  
      },
      headers: {
        'Content-Type' : 'application/json',
        'Authorization': authorizationToken
      },
      PaginationToken: paginationToken
  }

  return API.get(apiName, path, myInit);
}

export async function GetEducationMeetingExtraData(meetingId){ 
  return monthlyEducationMeetingGlobal.find(meeting => meeting["id"] ==meetingId);
}

export async function getHeadHouseholdNames(api: APIService):Promise<any>{
  let headHouseholdNames: string[] = [];

  let initialSurveys: any = [];
  let promiseInitialSurveysDone = await loadInitialSurveys(null,api);
  if(promiseInitialSurveysDone.items!=null){
    for(let initialSurvey of promiseInitialSurveysDone.items){
      if(!initialSurvey._deleted)
        initialSurveys.push(initialSurvey);
    }
  }   
  //initialSurveys.push(...promiseInitialSurveysDone.items);    
  
  while(promiseInitialSurveysDone.nextToken){ 
      promiseInitialSurveysDone = await loadInitialSurveys(promiseInitialSurveysDone.nextToken,api);
      if(promiseInitialSurveysDone.items!=null){
        for(let initialSurvey of promiseInitialSurveysDone.items){
          if(!initialSurvey._deleted)
            initialSurveys.push(initialSurvey);
        }
      } 
      //initialSurveys.push(...promiseInitialSurveysDone.items);
  }

  for(let initailSurvey of initialSurveys){         
    headHouseholdNames.push(initailSurvey.HeadHouseholdName);      
  }

  return <any>(headHouseholdNames);
}

export async function getColilertTestResults(api: APIService):Promise<any>{
  let colilertTestResultsDesc: any = [];
  let colilertTestResults = [];
  let promiseColilertTestResultsDone = await loadColilertTestResults(null,api);
  colilertTestResults.push(...promiseColilertTestResultsDone.items);    
  
  while(promiseColilertTestResultsDone.nextToken){ 
    promiseColilertTestResultsDone = await loadColilertTestResults(promiseColilertTestResultsDone.nextToken,api);
    colilertTestResults.push(...promiseColilertTestResultsDone.items);
  }

  //get only the description
  for(let colilertConfigDef of colilertTestResults){         
    colilertTestResultsDesc.push({desc:colilertConfigDef.desc,value:colilertConfigDef.value,position:colilertConfigDef.childvalue});      
  }

  colilertTestResultsDesc.sort((a,b) => a.position.localeCompare(b.position));

  return <any>(colilertTestResultsDesc);
}

export async function loadColilertTestResults(nextToken: any,api: APIService):Promise<any>{    
  let promiseColilertTestResults: any;
  let filterColilertTestResults: ModelConfigDefinitionsFilterInput = {
    type: {eq: "AV"},
    name: {eq: "ColilertTestResult"}
  };
  
  if(nextToken){
    promiseColilertTestResults = api.ListConfigDefinitionss(filterColilertTestResults,null,nextToken);
  }else{
    promiseColilertTestResults = api.ListConfigDefinitionss(filterColilertTestResults,null,null);
  }
  return promiseColilertTestResults;    
}

export async function getPetrifilmTestResults(api: APIService):Promise<any>{
  let petrifilmTestResultsDesc: any = [];
  let petrifilmTestResults = [];
  let promisePetrifilmTestResultsDone = await loadPetrifilmTestResults(null,api);
  petrifilmTestResults.push(...promisePetrifilmTestResultsDone.items);    
  
  while(promisePetrifilmTestResultsDone.nextToken){ 
    promisePetrifilmTestResultsDone = await loadPetrifilmTestResults(promisePetrifilmTestResultsDone.nextToken,api);
    petrifilmTestResults.push(...promisePetrifilmTestResultsDone.items);
  }

  //get only the description
  for(let petrifilmConfigDef of petrifilmTestResults){         
    petrifilmTestResultsDesc.push({desc:petrifilmConfigDef.desc, value:petrifilmConfigDef.value, position: petrifilmConfigDef.childvalue});      
  }

  petrifilmTestResultsDesc.sort((a,b) => a.position.localeCompare(b.position));

  return <any>(petrifilmTestResultsDesc);
}

export async function loadPetrifilmTestResults(nextToken: any,api: APIService):Promise<any>{    
  let promisePetrifilmTestResults: any;
  let filterPetrifilmTestResult: ModelConfigDefinitionsFilterInput = {
    type: {eq: "AV"},
    name: {eq: "PetrifilmTestResult"}
  };
  
  if(nextToken){
    promisePetrifilmTestResults = api.ListConfigDefinitionss(filterPetrifilmTestResult,null,nextToken);
  }else{
    promisePetrifilmTestResults = api.ListConfigDefinitionss(filterPetrifilmTestResult,null,null);
  }
  return promisePetrifilmTestResults;    
}

export async function getChlorineTestResults(api: APIService):Promise<any>{
  let chlorineTestResultsDesc: any = [];
  let chlorineTestResults = [];
  let promiseChlorineTestResultsDone = await loadChlorineTestResults(null,api);
  chlorineTestResults.push(...promiseChlorineTestResultsDone.items);    
  
  while(promiseChlorineTestResultsDone.nextToken){ 
    promiseChlorineTestResultsDone = await loadChlorineTestResults(promiseChlorineTestResultsDone.nextToken,api);
    chlorineTestResults.push(...promiseChlorineTestResultsDone.items);
  }

  //get only the description
  for(let chlorineConfigDef of chlorineTestResults){         
    chlorineTestResultsDesc.push({desc:chlorineConfigDef.desc, value:chlorineConfigDef.value, position: chlorineConfigDef.childvalue});      
  }

  chlorineTestResultsDesc.sort((a,b) => a.position.localeCompare(b.position));

  return <any>(chlorineTestResultsDesc);
}

export async function loadChlorineTestResults(nextToken: any,api: APIService):Promise<any>{    
  let promiseChlorineTestResults: any;
  let filterChlorineTestResult: ModelConfigDefinitionsFilterInput = {
    type: {eq: "AV"},
    name: {eq: "ChlorineTestResult"}
  };
  
  if(nextToken){
    promiseChlorineTestResults = api.ListConfigDefinitionss(filterChlorineTestResult,null,nextToken);
  }else{
    promiseChlorineTestResults = api.ListConfigDefinitionss(filterChlorineTestResult,null,null);
  }
  return promiseChlorineTestResults;    
}

export async function addHouseholdWaterTestSWE(api: APIService, newHouseholdWaterTestSWE: any):Promise<any>{
  let input: CreateHouseholdWaterTestInput = {
    id: newHouseholdWaterTestSWE.id,
    Namebwe: newHouseholdWaterTestSWE.Namebwe,
    date: newHouseholdWaterTestSWE.date,
    Country: newHouseholdWaterTestSWE.Country,
    Community: newHouseholdWaterTestSWE.Community,
    HeadHouseholdName: newHouseholdWaterTestSWE.HeadHouseholdName,
    ColilertDateTested: newHouseholdWaterTestSWE.ColilertDateTested,
    ColilertDateRead: newHouseholdWaterTestSWE.ColilertDateRead,
    ColilertTestResult: newHouseholdWaterTestSWE.ColilertTestResult,
    PetrifilmDateTested: newHouseholdWaterTestSWE.PetrifilmDateTested,
    PetrifilmDateRead: newHouseholdWaterTestSWE.PetrifilmDateRead,
    PetrifilmTestResult: newHouseholdWaterTestSWE.PetrifilmTestResult,
    ChlorineDateTested: newHouseholdWaterTestSWE.ChlorineDateTested,
    ChlorineTestResult: newHouseholdWaterTestSWE.ChlorineTestResult,
    Completed: newHouseholdWaterTestSWE.Completed,
    Lat: '',
    Lng: ''
  };
  let promiseCreatedHouseholdWaterTestSWE = api.CreateHouseholdWaterTest(input);

  return promiseCreatedHouseholdWaterTestSWE;
}

export async function getCommunityWaterLocations(api: APIService):Promise<any>{
  let communityWaterLocations: string[] = [];

  let communityWaters: any = [];
  let promiseCommunityWatersDone = await loadCommunityWaters(null,api);
  if(promiseCommunityWatersDone.items!=null){
    for(let communityWater of promiseCommunityWatersDone.items){
      if(!communityWater._deleted)
        communityWaters.push(communityWater);
    }
  } 
  
  while(promiseCommunityWatersDone.nextToken){ 
    promiseCommunityWatersDone = await loadCommunityWaters(promiseCommunityWatersDone.nextToken,api);
    if(promiseCommunityWatersDone.items!=null){
      for(let communityWater of promiseCommunityWatersDone.items){
        if(!communityWater._deleted)
        communityWaters.push(communityWater);
      }
    } 
  }

  for(let communityWater of communityWaters){         
    communityWaterLocations.push(communityWater.CommunityWaterLocation);      
  }

  return <any>(communityWaterLocations);
}

export async function loadCommunityWaters(nextToken: any,api: APIService):Promise<any>{    
  let promiseCommunityWaterLocations: any;
  if(nextToken){
    promiseCommunityWaterLocations = api.ListCommunityWaters(null,null,nextToken);
  }else{
    promiseCommunityWaterLocations = api.ListCommunityWaters(null,null,null);
  }
  return promiseCommunityWaterLocations;    
}

export async function addCommunityWaterTest(api: APIService, newCommunityWaterTest: any):Promise<any>{
  let input: CreateCommunityWaterTestInput = {
    id: newCommunityWaterTest.id,
    Namebwe: newCommunityWaterTest.Namebwe,
    date: newCommunityWaterTest.date,
    Country: newCommunityWaterTest.Country,
    Community: newCommunityWaterTest.Community,
    CommunityWaterLocation: newCommunityWaterTest.CommunityWaterLocation,
    ColilertDateTested: newCommunityWaterTest.ColilertDateTested,
    ColilertDateRead: newCommunityWaterTest.ColilertDateRead,
    ColilertTestResult: newCommunityWaterTest.ColilertTestResult,
    PetrifilmDateTested: newCommunityWaterTest.PetrifilmDateTested,
    PetrifilmDateRead: newCommunityWaterTest.PetrifilmDateRead,
    PetrifilmTestResult: newCommunityWaterTest.PetrifilmTestResult,
    Completed: newCommunityWaterTest.Completed,
    Lat: '',
    Lng: ''
  };
  let promiseCreatedCommunityWater = api.CreateCommunityWaterTest(input);

  return promiseCreatedCommunityWater;
}