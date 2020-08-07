import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class TeamService {
    
    // COMMONLY USED LODASH FUNCTION \\

    //_.findKey( ARRAY , { ' KEY ': VALUE });
    // Lodash function to search an object array and return the index 
    // when it matches a key/value pair
    // https://lodash.com/docs/4.17.15#findKey

    //default blank pool model
    private poolList = [
        {
            'name':'Pool A',
            'crossDiv': 'None',
            'teams':[]
        },{
            'name':'Pool B',
            'crossDiv': 'None',
            'teams':[]
        },{
            'name':'Pool C',
            'crossDiv': 'None',
            'teams':[]
        },{
            'name':'Pool D',
            'crossDiv': 'None',
            'teams':[]
        }
    ];

    //populated pool model for easy testing/populating
    private poolListPopulated = [
        {
            'name':'Pool A',
            'crossDiv': 'None',
            'teams':[
                {'name': 'team1'},
                {'name': 'team2'}
            ]
        },{
            'name':'Pool B',
            'crossDiv': 'None',
            'teams':[
                {'name': 'team6'},
                {'name': 'team7'}
            ]
        },{
            'name':'Pool C',
            'crossDiv': 'None',
            'teams':[
                {'name': 'team4'},
                {'name': 'team5'}
            ]
        },{
            'name':'Pool D',
            'crossDiv': 'None',
            'teams':[
                {'name': 'team11'},
                {'name': 'team12'}
            ]
        }
    ];

    //default list of games used for creating schedule
    //may be expanded to allow for more initial weeks by default
    private gamesList = [
        {
            'week':1,
            'games':[{
                'saturday1': {'team1': null, 'team2': null},
                'saturday2': {'team1': null, 'team2': null},
                'sunday1': {'team1': null, 'team2': null},
                'sunday2': {'team1': null, 'team2': null},
                'sunday3': {'team1': null, 'team2': null}
            }]
        }
    ];
    
    constructor(){
    }

    //returns current pool list
    getPoolList(){
        return this.poolList;
    }

    //returns current games list
    getGamesList(){
        return this.gamesList;
    }

    //non-working script to get number of games a particular team currently has scheduled
    getGamesNumber(teamName){
        var count = 0;
        for (var i = 0; i < this.gamesList.length; i++) {
            if ( _.findKey(this.gamesList[i]['games'], { 'team1': teamName }) != undefined || _.findKey(this.gamesList[i]['games'], { 'team2': teamName }) != undefined ){
                count++;
            }
        }
        return count;
    }

    //function to return pool name of particular team
    getTeamPool(teamName){
        for (var i = 0; i < this.poolList.length; i++) {
            var pool = _.findKey(this.poolList[i]['teams'], { 'name': teamName });
            if(pool != undefined){return this.poolList[i].name}
        }
    }

    //function to return individual pool's cross divisional rival
    //  Used for scheduling purposes, a team may only play within it's pool
    //  or it's cross divisional rival
    getPoolCrossDiv(pool){
        console.log(pool)
        var arrKey = _.findKey(this.poolList, { 'name': pool });
        if(arrKey){return this.poolList[arrKey]['crossDiv'];}
        else{return undefined}
    }

    //setter function for a pool's cross division rival
    //  sets both values to prevent scheduling bugs
    setPoolCrossDiv(pool, crossDiv){
        var arrKey = _.findKey(this.poolList, { 'name': pool });
        this.poolList[arrKey]['crossDiv'] = crossDiv;
        var crossArrKey = _.findKey(this.poolList, { 'name': crossDiv });
        this.poolList[crossArrKey]['crossDiv'] = pool;
    }

    //function to create team and add to desired pool
    newTeam(name, pool){
        var arrKey = _.findKey(this.poolList, { 'name': pool });
        this.poolList[arrKey]['teams'].push(
            {'name': name}
        );
    }

    //function to return the teams in a particular pool
    getTeams(pool){
        return this.poolList[ _.findKey(this.poolList, { 'name': pool }) ].teams
    }

    //function that uses an empty game week model to allow more games to be scheduled
    newWeek(){
        var gamesDefault:any = {
            'week': _.size(this.gamesList)+1,
            'games':[{
                'saturday1':  {'team1': null, 'team2': null},
                'saturday2':  {'team1': null, 'team2': null},
                'sunday1':  {'team1': null, 'team2': null},
                'sunday2':  {'team1': null, 'team2': null},
                'sunday3':  {'team1': null, 'team2': null}
            }]
        }
        this.gamesList.push(gamesDefault);
    }

    //function that reassigns a team to another pool
    // both adds and deletes existing records 
    reassignTeam(oldTeamName, teamName, oldPoolID, teamPool){
        var arrKey = _.findKey(this.poolList, { 'name': oldPoolID });
        var teamKey = _.findKey(this.poolList[arrKey], { 'name': oldTeamName });

        this.poolList[arrKey]['teams'].splice(teamKey, 1);
        this.newTeam(teamName, teamPool);
    }

    //function to set game slots with a particular team
    // function takes in the game week, time slot, team 1/2, and the team name 
    // in order to assign each value accordingly 
    setGame(week,time,teamSlot,teamID){
        var arrKey = _.findKey(this.gamesList, { 'week': week });

        // gather pool id's for existing teams as well as new team to check compatibility 
        // based on cross pool rivaly
        var newTeamPool = this.getTeamPool(teamID);
        var tempTime1 = this.getTeamPool( this.gamesList[arrKey]['games'][0][time]['team1'] );
        var tempTime2 = this.getTeamPool( this.gamesList[arrKey]['games'][0][time]['team2'] );

        // check opposite team slot for pool compatibilty
        // team is attempting to be inserted into 'team 2' slot
        if(teamSlot == 'team1'){
            // if truthy
            //   'team 2' and inserted team are previously cross pool rivals
            //   OR 
            //   'team 2' and inserted team are in the same pool 
            //   OR
            //   there is currently no 'team 2'
            if( this.getPoolCrossDiv(tempTime2) == newTeamPool || tempTime2 == newTeamPool || tempTime2 == undefined){
                this.gamesList[arrKey]['games'][0][time][teamSlot] = teamID;
            }
            // else reject insert and display error message
            // TODO: EventEmitter to reset selection on error
            else{
                alert('Sorry, this game is not compatible and has not been saved.')
            }
        }
        // team is attempting to be inserted into 'team 2' slot
        else{
            // if truthy
            //   'team 1' and inserted team are previously cross pool rivals
            //   OR 
            //   'team 1' and inserted team are in the same pool 
            //   OR
            //   there is currently no 'team 1'
            if( this.getPoolCrossDiv(tempTime1) == newTeamPool || tempTime1 == newTeamPool || tempTime1 == undefined ){
                this.gamesList[arrKey]['games'][0][time][teamSlot] = teamID;
            }
            else{
                alert('Sorry, this game is not compatible and has not been saved.')
            }
        }
    }


} 