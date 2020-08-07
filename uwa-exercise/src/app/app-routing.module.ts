import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPoolsComponent } from './view-pools/view-pools.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { EditPoolComponent } from './edit-pool/edit-pool.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ViewTeamScheduleComponent } from './view-team-schedule/view-team-schedule.component';

const routes: Routes = [
  { path: '', component: ViewPoolsComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'editTeam/:teamID/:poolID', component: EditTeamComponent },
  { path: 'editPool/:poolID', component: EditPoolComponent },
  { path: 'viewTeamSchedule/:teamID', component: ViewTeamScheduleComponent },
  { path: 'viewSchedule', component: ViewScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
