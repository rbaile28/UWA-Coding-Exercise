import { Component, OnInit } from '@angular/core';
import { TeamService } from '../teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pool',
  templateUrl: './edit-pool.component.html',
  styleUrls: ['./edit-pool.component.scss']
})
export class EditPoolComponent implements OnInit {
  //Component that sets cross divisional rivals and displays pool teams

  poolID = this.route.snapshot.params['poolID'];
  teams;
  poolList;
  crossDiv;

  constructor(private _teamService: TeamService,
              private route:ActivatedRoute){ 
  }

  changeCrossDiv(newCrossDiv){
    this._teamService.setPoolCrossDiv(this.poolID, newCrossDiv);
  }

  ngOnInit(): void {
    this.poolList = this._teamService.getPoolList();
    this.teams = this._teamService.getTeams(this.poolID);
    this.crossDiv = this._teamService.getPoolCrossDiv(this.poolID);
  }

}
 