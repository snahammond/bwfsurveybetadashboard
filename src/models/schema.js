export const schema = {
    "models": {
        "InitialSurvey": {
            "name": "InitialSurvey",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SurveyId": {
                    "name": "SurveyId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdPhoneNumber": {
                    "name": "HeadHouseholdPhoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdSex": {
                    "name": "HeadHouseholdSex",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdMaritalStatus": {
                    "name": "HeadHouseholdMaritalStatus",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdAge": {
                    "name": "HeadHouseholdAge",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdOccupation": {
                    "name": "HeadHouseholdOccupation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdEducation": {
                    "name": "HeadHouseholdEducation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PersonBeingInterviewed": {
                    "name": "PersonBeingInterviewed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TotalNoPeopleHousehold": {
                    "name": "TotalNoPeopleHousehold",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdMale0_1Year": {
                    "name": "NoHouseholdMale0_1Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdFemale0_1Year": {
                    "name": "NoHouseholdFemale0_1Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdMale1_5Year": {
                    "name": "NoHouseholdMale1_5Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdFemale1_5Year": {
                    "name": "NoHouseholdFemale1_5Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdMale5_12Year": {
                    "name": "NoHouseholdMale5_12Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdFemale5_12Year": {
                    "name": "NoHouseholdFemale5_12Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdMale13_17Year": {
                    "name": "NoHouseholdMale13_17Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdFemale13_17Year": {
                    "name": "NoHouseholdFemale13_17Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdMale18_Year": {
                    "name": "NoHouseholdMale18_Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdFemale18_Year": {
                    "name": "NoHouseholdFemale18_Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "ReasonNoSchoolChildren5_17Year": {
                    "name": "ReasonNoSchoolChildren5_17Year",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "MainSourceDrinkingWater": {
                    "name": "MainSourceDrinkingWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "MainSourceOtherPurposeWater": {
                    "name": "MainSourceOtherPurposeWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TimeToWaterSourceGetReturn": {
                    "name": "TimeToWaterSourceGetReturn",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseholdFrequencyAtWaterSource": {
                    "name": "HouseholdFrequencyAtWaterSource",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "UsualHouseholdWaterFetcher": {
                    "name": "UsualHouseholdWaterFetcher",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ContainerCarryWater": {
                    "name": "ContainerCarryWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WaterTreatmentBeforeDrinking": {
                    "name": "WaterTreatmentBeforeDrinking",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "MainReasonNoWaterTreatmentBeforeDrinking": {
                    "name": "MainReasonNoWaterTreatmentBeforeDrinking",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WaterTreatmentMethod": {
                    "name": "WaterTreatmentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FrequencyWaterTreatment": {
                    "name": "FrequencyWaterTreatment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "LastTimeTreatedHouseholdWaterWithChlorine": {
                    "name": "LastTimeTreatedHouseholdWaterWithChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhereDidYouGetChlorineToTreatHouseholdWater": {
                    "name": "WhereDidYouGetChlorineToTreatHouseholdWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "AmountSpendPerWeekForChlorineToTreatWater": {
                    "name": "AmountSpendPerWeekForChlorineToTreatWater",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HowDifficultToObtainChlorine": {
                    "name": "HowDifficultToObtainChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TakingWaterFromStorage": {
                    "name": "TakingWaterFromStorage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "RubbishDisposal": {
                    "name": "RubbishDisposal",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseholdDefecationMethod": {
                    "name": "HouseholdDefecationMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WasteDisposalYoungestChild": {
                    "name": "WasteDisposalYoungestChild",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WashedHandsIn24Hours": {
                    "name": "WashedHandsIn24Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhenWashedHandsIn24Hours": {
                    "name": "WhenWashedHandsIn24Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhatUsedToWashYourHands": {
                    "name": "WhatUsedToWashYourHands",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CommonIllnessAffectingAllChildrenInHousehold": {
                    "name": "CommonIllnessAffectingAllChildrenInHousehold",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn14days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn14days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek": {
                    "name": "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn7days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn7days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospital": {
                    "name": "DidSickChildrenGoToHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospitalYes": {
                    "name": "DidSickChildrenGoToHospitalYes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SickChildrenBreastfeeding": {
                    "name": "SickChildrenBreastfeeding",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "OutcomeMostRecentVomiting_DiarrheaAtHospital": {
                    "name": "OutcomeMostRecentVomiting_DiarrheaAtHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfOwnIllness": {
                    "name": "NoDaysNoWorkBecauseOfOwnIllness",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfIllnessFamilyMembers": {
                    "name": "NoDaysNoWorkBecauseOfIllnessFamilyMembers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "MoneySpentMedicalTreatmentLast4weeks": {
                    "name": "MoneySpentMedicalTreatmentLast4weeks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HealthChangeInAYear": {
                    "name": "HealthChangeInAYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HealthChangeFamilyInAYear": {
                    "name": "HealthChangeFamilyInAYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ChildrenDiedAfterBeingBornAlive": {
                    "name": "ChildrenDiedAfterBeingBornAlive",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CausesOfChildrenDeath": {
                    "name": "CausesOfChildrenDeath",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "InitialSurveys",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "InitialSurveyDeleteControl": {
            "name": "InitialSurveyDeleteControl",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "InitialSurveyDeleteControls",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "FollowUpSurvey": {
            "name": "FollowUpSurvey",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SurveyId": {
                    "name": "SurveyId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PersonBeingInterviewed": {
                    "name": "PersonBeingInterviewed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WaterTreatmentBeforeDrinking": {
                    "name": "WaterTreatmentBeforeDrinking",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "MainReasonNoWaterTreatmentBeforeDrinking": {
                    "name": "MainReasonNoWaterTreatmentBeforeDrinking",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WaterTreatmentMethod": {
                    "name": "WaterTreatmentMethod",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "FrequencyWaterTreatment": {
                    "name": "FrequencyWaterTreatment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "LastTimeTreatedHouseholdWaterWithChlorine": {
                    "name": "LastTimeTreatedHouseholdWaterWithChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhereDidYouGetChlorineToTreatHouseholdWater": {
                    "name": "WhereDidYouGetChlorineToTreatHouseholdWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "AmountSpendPerWeekForChlorineToTreatWater": {
                    "name": "AmountSpendPerWeekForChlorineToTreatWater",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HowDifficultToObtainChlorine": {
                    "name": "HowDifficultToObtainChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TakingWaterFromStorage": {
                    "name": "TakingWaterFromStorage",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhenWashedHandsIn24Hours": {
                    "name": "WhenWashedHandsIn24Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhatUsedToWashYourHands": {
                    "name": "WhatUsedToWashYourHands",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CommonIllnessAffectingAllChildrenInHousehold": {
                    "name": "CommonIllnessAffectingAllChildrenInHousehold",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn14days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn14days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek": {
                    "name": "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn7days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn7days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospital": {
                    "name": "DidSickChildrenGoToHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospitalYes": {
                    "name": "DidSickChildrenGoToHospitalYes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SickChildrenBreastfeeding": {
                    "name": "SickChildrenBreastfeeding",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "OutcomeMostRecentVomiting_DiarrheaAtHospital": {
                    "name": "OutcomeMostRecentVomiting_DiarrheaAtHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfOwnIllness": {
                    "name": "NoDaysNoWorkBecauseOfOwnIllness",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfIllnessFamilyMembers": {
                    "name": "NoDaysNoWorkBecauseOfIllnessFamilyMembers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "MoneySpentMedicalTreatmentLast4weeks": {
                    "name": "MoneySpentMedicalTreatmentLast4weeks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HealthChangeInAYear": {
                    "name": "HealthChangeInAYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HealthChangeFamilyInAYear": {
                    "name": "HealthChangeFamilyInAYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "BenefitSWP": {
                    "name": "BenefitSWP",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FollowUpSurveys",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HealthCheckSurvey": {
            "name": "HealthCheckSurvey",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SurveyId": {
                    "name": "SurveyId",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PersonBeingInterviewed": {
                    "name": "PersonBeingInterviewed",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "LastTimeTreatedHouseholdWaterWithChlorine": {
                    "name": "LastTimeTreatedHouseholdWaterWithChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhereDidYouGetChlorineToTreatHouseholdWater": {
                    "name": "WhereDidYouGetChlorineToTreatHouseholdWater",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "AmountSpendPerWeekForChlorineToTreatWater": {
                    "name": "AmountSpendPerWeekForChlorineToTreatWater",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "HowDifficultToObtainChlorine": {
                    "name": "HowDifficultToObtainChlorine",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WasteDisposalYoungestChild": {
                    "name": "WasteDisposalYoungestChild",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WashedHandsIn24Hours": {
                    "name": "WashedHandsIn24Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhenWashedHandsIn24Hours": {
                    "name": "WhenWashedHandsIn24Hours",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "WhatUsedToWashYourHands": {
                    "name": "WhatUsedToWashYourHands",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn14days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn14days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek": {
                    "name": "NoTotalSchoolDaysMissedBySchoolAgeChildrenIn2LastWeek",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChildrenWithVomitingOrDiarrheaIn7days": {
                    "name": "NoChildrenWithVomitingOrDiarrheaIn7days",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospital": {
                    "name": "DidSickChildrenGoToHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DidSickChildrenGoToHospitalYes": {
                    "name": "DidSickChildrenGoToHospitalYes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SickChildrenBreastfeeding": {
                    "name": "SickChildrenBreastfeeding",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "OutcomeMostRecentVomiting_DiarrheaAtHospital": {
                    "name": "OutcomeMostRecentVomiting_DiarrheaAtHospital",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfOwnIllness": {
                    "name": "NoDaysNoWorkBecauseOfOwnIllness",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoDaysNoWorkBecauseOfIllnessFamilyMembers": {
                    "name": "NoDaysNoWorkBecauseOfIllnessFamilyMembers",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "MoneySpentMedicalTreatmentLast4weeks": {
                    "name": "MoneySpentMedicalTreatmentLast4weeks",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "HealthCheckSurveys",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SWEMonthlySummary": {
            "name": "SWEMonthlySummary",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "SWEPosition": {
                    "name": "SWEPosition",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoWaterSampleTaken": {
                    "name": "NoWaterSampleTaken",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoSurveysCompleted": {
                    "name": "NoSurveysCompleted",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHealthCheck": {
                    "name": "NoHealthCheck",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn1Taught": {
                    "name": "NoLsn1Taught",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson1": {
                    "name": "NoPersonsTaughtLesson1",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn2Taught": {
                    "name": "NoLsn2Taught",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson2": {
                    "name": "NoPersonsTaughtLesson2",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn3Taught": {
                    "name": "NoLsn3Taught",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson3": {
                    "name": "NoPersonsTaughtLesson3",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn4Taught": {
                    "name": "NoLsn4Taught",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson4": {
                    "name": "NoPersonsTaughtLesson4",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaught": {
                    "name": "NoPersonsTaught",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHouseholdReceivingChlorineSupplies": {
                    "name": "NoHouseholdReceivingChlorineSupplies",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLiquidChlorineDistributed": {
                    "name": "NoLiquidChlorineDistributed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoChlorineTabletsDistributed": {
                    "name": "NoChlorineTabletsDistributed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoWaterStorageContainersDistributed": {
                    "name": "NoWaterStorageContainersDistributed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoSchoolVisits": {
                    "name": "NoSchoolVisits",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPublicServiceMessagesAired": {
                    "name": "NoPublicServiceMessagesAired",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "SWEMonthlySummaries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HouseholdWaterTest": {
            "name": "HouseholdWaterTest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateTested": {
                    "name": "ColilertDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateRead": {
                    "name": "ColilertDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertTestResult": {
                    "name": "ColilertTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateTested": {
                    "name": "PetrifilmDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateRead": {
                    "name": "PetrifilmDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmTestResult": {
                    "name": "PetrifilmTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ChlorineDateTested": {
                    "name": "ChlorineDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ChlorineTestResult": {
                    "name": "ChlorineTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "HouseholdWaterTests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CommunityWaterTest": {
            "name": "CommunityWaterTest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CommunityWaterLocation": {
                    "name": "CommunityWaterLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateTested": {
                    "name": "ColilertDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateRead": {
                    "name": "ColilertDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertTestResult": {
                    "name": "ColilertTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateTested": {
                    "name": "PetrifilmDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateRead": {
                    "name": "PetrifilmDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmTestResult": {
                    "name": "PetrifilmTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CommunityWaterTests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CommunityWater": {
            "name": "CommunityWater",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CommunityWaterLocation": {
                    "name": "CommunityWaterLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CommunityWaters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ConfigDefinitions": {
            "name": "ConfigDefinitions",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "desc": {
                    "name": "desc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "childname": {
                    "name": "childname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "childvalue": {
                    "name": "childvalue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "childdesc": {
                    "name": "childdesc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentname": {
                    "name": "parentname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentvalue": {
                    "name": "parentvalue",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parentdesc": {
                    "name": "parentdesc",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "ConfigDefinitions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "BWFSURVEYTOTALS": {
            "name": "BWFSURVEYTOTALS",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "surveyName": {
                    "name": "surveyName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "total": {
                    "name": "total",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "BWFSURVEYTOTALS",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VolunteerHouseholdWaterTest": {
            "name": "VolunteerHouseholdWaterTest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseholdLocation": {
                    "name": "HouseholdLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateTested": {
                    "name": "ColilertDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertDateRead": {
                    "name": "ColilertDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ColilertTestResult": {
                    "name": "ColilertTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateTested": {
                    "name": "PetrifilmDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmDateRead": {
                    "name": "PetrifilmDateRead",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "PetrifilmTestResult": {
                    "name": "PetrifilmTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ChlorineDateTested": {
                    "name": "ChlorineDateTested",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "ChlorineTestResult": {
                    "name": "ChlorineTestResult",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "VolunteerHouseholdWaterTests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VolunteerHousehold": {
            "name": "VolunteerHousehold",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HouseholdLocation": {
                    "name": "HouseholdLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "VolunteerHouseholds",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Volunteer": {
            "name": "Volunteer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Volunteers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VolunteerMonthlySummary": {
            "name": "VolunteerMonthlySummary",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "NoWaterSampleTaken": {
                    "name": "NoWaterSampleTaken",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn1TaughtAsPrimaryInstr": {
                    "name": "NoLsn1TaughtAsPrimaryInstr",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn1TaughtAssistingSWE": {
                    "name": "NoLsn1TaughtAssistingSWE",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson1ByVol": {
                    "name": "NoPersonsTaughtLesson1ByVol",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn2TaughtAsPrimaryInstr": {
                    "name": "NoLsn2TaughtAsPrimaryInstr",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn2TaughtAssistingSWE": {
                    "name": "NoLsn2TaughtAssistingSWE",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson2ByVol": {
                    "name": "NoPersonsTaughtLesson2ByVol",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn3TaughtAsPrimaryInstr": {
                    "name": "NoLsn3TaughtAsPrimaryInstr",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn3TaughtAssistingSWE": {
                    "name": "NoLsn3TaughtAssistingSWE",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson3ByVol": {
                    "name": "NoPersonsTaughtLesson3ByVol",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn4TaughtAsPrimaryInstr": {
                    "name": "NoLsn4TaughtAsPrimaryInstr",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoLsn4TaughtAssistingSWE": {
                    "name": "NoLsn4TaughtAssistingSWE",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtLesson4ByVol": {
                    "name": "NoPersonsTaughtLesson4ByVol",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPersonsTaughtByVol": {
                    "name": "NoPersonsTaughtByVol",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "VolunteerMonthlySummaries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Meeting": {
            "name": "Meeting",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Country": {
                    "name": "Country",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Community": {
                    "name": "Community",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DiscussionsTaught": {
                    "name": "DiscussionsTaught",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Meetings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "HouseholdAttendingMeeting": {
            "name": "HouseholdAttendingMeeting",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdName": {
                    "name": "HeadHouseholdName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "HeadHouseholdPhoneNumber": {
                    "name": "HeadHouseholdPhoneNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NumberOfAdults": {
                    "name": "NumberOfAdults",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "CommitedToUseAquatabs": {
                    "name": "CommitedToUseAquatabs",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NumberOfAquaTabsReceived": {
                    "name": "NumberOfAquaTabsReceived",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "MeetingID": {
                    "name": "MeetingID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "HouseholdAttendingMeetings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "SWEMonthlyTotalSummary": {
            "name": "SWEMonthlyTotalSummary",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "SWEPosition": {
                    "name": "SWEPosition",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NoWaterSampleTaken": {
                    "name": "NoWaterSampleTaken",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoSurveysCompleted": {
                    "name": "NoSurveysCompleted",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoHealthCheck": {
                    "name": "NoHealthCheck",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "NoPublicServiceMessagesAired": {
                    "name": "NoPublicServiceMessagesAired",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "SWEMonthlyTotalSummaries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "VolunteerMonthlyTotalSummary": {
            "name": "VolunteerMonthlyTotalSummary",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Namebwe": {
                    "name": "Namebwe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Namevol": {
                    "name": "Namevol",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "NoWaterSampleTaken": {
                    "name": "NoWaterSampleTaken",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Completed": {
                    "name": "Completed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "Lat": {
                    "name": "Lat",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Lng": {
                    "name": "Lng",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "VolunteerMonthlyTotalSummaries",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "AnswerType": {
            "name": "AnswerType",
            "values": [
                "TEXTVALUE",
                "ENUMVALUE",
                "ENUMMULTIPLEVALUE",
                "ENUMWITHNONEVALUE",
                "ENUMDROPDOWNVALUE",
                "NUMBERVALUE",
                "DATEVALUE"
            ]
        }
    },
    "nonModels": {},
    "version": "bc51a5e9956904e48779282f6539be77"
};