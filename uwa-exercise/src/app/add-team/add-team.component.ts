import { Component, OnInit } from '@angular/core';
import { TeamService } from '../teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  //Component to add a team to a particular pool

  poolList = this._teamService.getPoolList();
  
  teamName;
  teamPool;

  constructor(public _teamService: TeamService) { }

  saveNewTeam(){
    this._teamService.newTeam(this.teamName, this.teamPool);
  }

  ngOnInit(): void {
    this.teamPool = this.poolList[0].name;
  }

}
