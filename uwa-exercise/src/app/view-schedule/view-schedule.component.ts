import { Component, OnInit } from '@angular/core';
import { TeamService } from '../teams.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.scss']
})
export class ViewScheduleComponent implements OnInit {
//Component to schedule games across all pools and add weeks
//Business rules are checked in teams.service on save

  gamesList;
  teamsList;

  constructor( private _teamService: TeamService ) { }

  addWeek(){
    this._teamService.newWeek();
  }

  saveGame(ev, week,time,teamSlot,teamID){
    this._teamService.setGame(week,time,teamSlot,teamID);
  }

  ngOnInit(): void {
    this.gamesList = this._teamService.getGamesList();
    this.teamsList = this._teamService.getPoolList();
  }

} 
 