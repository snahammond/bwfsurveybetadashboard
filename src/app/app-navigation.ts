export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Extraction Reports',
    icon: 'folder',
    items: [
      {
        text: 'Initial Survey',
        path: '/initial-survey'
      },
      {
        text: 'Follow-up Survey',
        path: '/follow-up-survey'
      },
      {
        text: 'Community Water Test',
        path: '/community-water-test'
      },
      {
        text: 'Household Water Test SWE',
        path: '/household-water-test-swe'
      },
      {
        text: 'Household Water Test Volunteers',
        path: '/householdwatertestvol'
      },
      {
        text: 'Health Survey',
        path: '/healthsurvey'
      },
      {
        text: 'Monthly Activity',
        path: '/monthlyactivity'
      }
    ]
  },
  {
    text: 'Critical Indicator Reports',
    icon: 'folder',
    items: [
      {
        text: 'Water Quality Indicator',
        path: '/waterqualityindicator'
      },
      {
        text: 'Behavioral Compliance Indicators',
        path: '/behavioralcomplianceindicators'
      },
      {
        text: 'Health Indicators',
        path: '/healthindicators'
      }
    ]
  },
  {
    text: 'Descriptive Background  Report',
    path: '/descriptivebackgroundreport',
    icon: 'folder'
  }  
];
