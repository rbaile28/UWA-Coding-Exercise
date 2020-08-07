import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeamService } from './teams.service';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ViewPoolsComponent } from './view-pools/view-pools.component';
import { EditPoolComponent } from './edit-pool/edit-pool.component';
import { ViewTeamScheduleComponent } from './view-team-schedule/view-team-schedule.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AddTeamComponent,
    EditTeamComponent,
    ViewScheduleComponent,
    ViewPoolsComponent,
    EditPoolComponent,
    ViewTeamScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
