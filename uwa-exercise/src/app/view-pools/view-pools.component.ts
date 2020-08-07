import { Component, OnInit } from '@angular/core';
import { TeamService } from '../teams.service';

@Component({
  selector: 'app-view-pools',
  templateUrl: './view-pools.component.html',
  styleUrls: ['./view-pools.component.scss']
})
export class ViewPoolsComponent implements OnInit {
  //Component that displays the a list of pools that can be opened to reveal 
  //corresponding pool teams with links to edit team or view game schedule

  pools;

  constructor(private _teamService: TeamService) {

  }

  ngOnInit(): void {
    this.pools = this._teamService.getPoolList();
    console.log(this.pools)
  }

}
