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
        path: '/household-water-test-volunteers'
      },
      {
        text: 'Health Survey',
        path: '/health-survey'
      },
      /*{
        text: 'Monthly Activity SWE',
        path: '/monthly-activity'
      },
      {
        text: 'Monthly Activity Volunteers',
        path: '/monthly-activity-vol'
      }*/
      {
        text: 'Monthly Education Summary',
        path: '/monthly-education-summary'
      },
      {
        text: 'Households Attending meeting',
        path: '/monthly-household-attending-meeting'
      },
    ]
  },
  {
    text: 'Critical Indicator Reports',
    icon: 'folder',
    items: [
      {
        text: 'Water Quality Indicator',
        path: '/water-quality-indicators'
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
