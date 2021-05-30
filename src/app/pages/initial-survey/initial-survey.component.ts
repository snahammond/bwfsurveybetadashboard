import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/services/api.service';

import { String, StringBuilder } from 'typescript-string-operations';

@Component({
  selector: 'app-initial-survey',
  templateUrl: './initial-survey.component.html',
  styleUrls: ['./initial-survey.component.scss']
})
export class InitialSurveyComponent {
  initialSurveys: any = [];

  constructor(private api: APIService) { 
    this.loadInitialSurveys(null).then(()=>{      
      console.log("done loading loadInitialSurveys "+ this.initialSurveys.length);
    }).catch(e=>{
      console.log("error could not load loadInitialSurveys", e);
    });
  }

  
  async loadInitialSurveys(nextToken){    
    let promiseInitialSurveys: any;
    if(nextToken){
      promiseInitialSurveys = this.api.ListInitialSurveys(null,null,nextToken);
    }else{
      promiseInitialSurveys = this.api.ListInitialSurveys(null,null,null);
    }

    let promiseInitialSurveysDone = await promiseInitialSurveys;
    this.initialSurveys.push(...promiseInitialSurveysDone.items);

    if(promiseInitialSurveysDone.nextToken){
      console.log("calling loadInitialSurveys recursively " + this.initialSurveys.length);
      await this.loadInitialSurveys(promiseInitialSurveysDone.nextToken);
    }  
  }
  
  getHeadHouseholdSexDescription(rowData){
      var result:string = "";
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

  getHeadHouseholdMaritalStatusDescription(rowData){
    var result:string = "";
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

  getHeadHouseholdOccupationDescription(rowData){
    var result:string = "";
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

  getHeadHouseholdEducationDescription(rowData) {    
    var result:string = "";
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

  getPersonBeingInterviewedDescription(rowData){
    var result:string = "";
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

  getReasonNoSchoolChildren5_17YearDescription(rowData){    
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedReasonNoSchoolChildren5_17Year:string[] = rowData.ReasonNoSchoolChildren5_17Year.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;    
  }

  getMainSourceDrinkingWaterDescription(rowData){
    var result:string = "";
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

  getMainSourceOtherPurposeWaterDescription(rowData){
    var result:string = "";
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

  getHouseholdFrequencyAtWaterSourceDescription(rowData){    
    var result:string = "";
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
  
  getUsualHouseholdWaterFetcherDescription(rowData){
    var result:string = "";
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

}
