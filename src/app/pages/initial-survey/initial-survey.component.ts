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

  getContainerCarryWaterDescription(rowData){
    var result:string = "";
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

  getWaterTreatmentBeforeDrinkingDescription(rowData){
    var result:string = "";
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

  getMainReasonNoWaterTreatmentBeforeDrinkingDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedMainReasonNoWaterTreatmentBeforeDrinking:string[] = rowData.MainReasonNoWaterTreatmentBeforeDrinking.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;
  }

  getWaterTreatmentMethodDescription(rowData){
    var result:string = "";
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

  getHowLongUsingWaterTreatmentDescription(rowData){
    var result:string = "";
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

  getFrequencyWaterTreatmentDescription(rowData){
    var result:string = "";
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

  getWaterStorageAtHomeDescription(rowData){
    var result:string = "";
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

  getWaterStorageContainerHaveLidDescription(rowData){
    var result:string = "";
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

  getTakingWaterFromStorageDescription(rowData){
    var result:string = "";
    switch(rowData.TakingWaterFromStorage) { 
      case "EACHPERSONUSESOWNCUP": { 
        result = "Each person uses their own cup or their hands to take water from the storage container"; 
        break; 
      } 
      case "ONECUPUSEDBYALL": { 
        result = "The same cup/dipper is used by all members for taking water for drinking";  
        break; 
      } 
      case "VARIETYWAYSUSED": { 
        result = "A variety of ways are used for taking water from the storage container by household member"; 
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

  getRubbishDisposalDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedRubbishDisposal:string[] = rowData.RubbishDisposal.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;
  }

  getHouseholdDefecationMethodDescription(rowData){
    var result:string = "";
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

  getWasteDisposalYoungestChildDescription(rowData){
    var result:string = "";
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

  getWashedHandsIn24HoursDescription(rowData){
    var result:string = "";
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

  getWhenWashedHandsIn24HoursDescription(rowData){
    var result:string = "";
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

  getWhatUsedToWashYourHandsDescription(rowData){
    var result:string = "";
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

  getCommonIllnessAffectingAllChildrenInHouseholdDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedCommonIllnessAffectingAllChildrenInHousehold:string[] = rowData.CommonIllnessAffectingAllChildrenInHousehold.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;
  }

  getDidSickChildrenGoToHospitalDescription(rowData){
    var result:string = "";
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

  getDidSickChildrenGoToHospitalYesDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedDidSickChildrenGoToHospitalYes:string[] = rowData.DidSickChildrenGoToHospitalYes.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;
  }

  getSickChildrenBreastfeedingDescription(rowData){
    var result:string = "";
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

  getOutcomeMostRecentVomiting_DiarrheaAtHospitalDescription(rowData){
    var result:string = "";
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

  getHealthChangeInAYearDescription(rowData){
    var result:string = "";
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

  getHealthChangeFamilyInAYearDescription(rowData){
    var result:string = "";
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

  getChildrenDiedAfterBeingBornAliveDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedChildrenDiedAfterBeingBornAlive:string[] = rowData.ChildrenDiedAfterBeingBornAlive.split(",");
    
    allSelectedChildrenDiedAfterBeingBornAlive.forEach(element => {
      switch(element) { 
        case "NOCHILDRENDIEDAFTERBEINGBORNALIVE": { 
          resultBuilder.Append("No children have died after being born alive ,"); 
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

    result = resultBuilder.ToString();
     
   return result;
  }

  getCausesOfChildrenDeathDescription(rowData){
    var result:string = "";

    var resultBuilder = new StringBuilder();    
    var allSelectedCausesOfChildrenDeath:string[] = rowData.CausesOfChildrenDeath.split(",");
    
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

    result = resultBuilder.ToString();
     
   return result;
  }
}
