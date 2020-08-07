import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../teams.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  //Component that allows renaming and reassigning of teams to different pools

  oldTeamName = this.route.snapshot.params['teamID'];
  teamName = this.route.snapshot.params['teamID'];
  oldPoolID = this.route.snapshot.params['poolID'];
  teamPool = this.route.snapshot.params['poolID'];

  constructor(
    public _teamService: TeamService,
    private route:ActivatedRoute,
  ) { }

  saveTeamChanges(){
    this._teamService.reassignTeam(this.oldTeamName, this.teamName, this.oldPoolID, this.teamPool);
  }

  ngOnInit(): void {
  }

}
