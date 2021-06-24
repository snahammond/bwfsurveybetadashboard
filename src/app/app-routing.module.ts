import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxButtonModule, DxDataGridModule, DxDropDownBoxModule, DxFormModule } from 'devextreme-angular';
import { InitialSurveyComponent } from './pages/initial-survey/initial-survey.component';
import { FollowUpSurveyComponent } from './pages/follow-up-survey/follow-up-survey.component';
import { CommunityWaterTestComponent } from './pages/community-water-test/community-water-test.component';
import { HouseholdWaterTestSweComponent } from './pages/household-water-test-swe/household-water-test-swe.component';
import { HouseholdWaterTestVolunteersComponent } from './pages/household-water-test-volunteers/household-water-test-volunteers.component';
import { HealthSurveyComponent } from './pages/health-survey/health-survey.component';
import { MonthlyActivityComponent } from './pages/monthly-activity/monthly-activity.component';
import { MonthlyActivityVolComponent } from './pages/monthly-activity-vol/monthly-activity-vol.component';
import { WaterQualityIndicatorsComponent } from './pages/water-quality-indicators/water-quality-indicators.component';

const routes: Routes = [
  {
    path: 'initial-survey',
    component: InitialSurveyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'follow-up-survey',
    component: FollowUpSurveyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'community-water-test',
    component: CommunityWaterTestComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'household-water-test-swe',
    component: HouseholdWaterTestSweComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'household-water-test-volunteers',
    component: HouseholdWaterTestVolunteersComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'health-survey',
    component: HealthSurveyComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'monthly-activity',
    component: MonthlyActivityComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'monthly-activity-vol',
    component: MonthlyActivityVolComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'water-quality-indicators',
    component: WaterQualityIndicatorsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule,DxDropDownBoxModule,DxButtonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent, InitialSurveyComponent, FollowUpSurveyComponent, CommunityWaterTestComponent, HouseholdWaterTestSweComponent, HouseholdWaterTestVolunteersComponent, HealthSurveyComponent, MonthlyActivityComponent, MonthlyActivityVolComponent, WaterQualityIndicatorsComponent]
})
export class AppRoutingModule { }
