import { Component, OnInit } from '@angular/core';
import { TeamService } from '../teams.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-team-schedule',
  templateUrl: './view-team-schedule.component.html',
  styleUrls: ['./view-team-schedule.component.scss']
})
export class ViewTeamScheduleComponent implements OnInit {
//Component to view individual team schedule
//Rows not containing team are hidden to present proper table view
//Future development should include a pipe or database call to filter these extra games more effectively

  teamID = this.route.snapshot.params['teamID'];
  gamesList;
  gamesCount;

  constructor(private _teamService: TeamService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.gamesList = this._teamService.getGamesList();
    this.gamesCount = this._teamService.getGamesNumber(this.teamID);
  }
 

} 