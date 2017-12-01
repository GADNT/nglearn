import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {
  private teamsNamesList: Array<Team> = new Array<Team>();

  getTeams(): Array<Team> {
    for (let i = 1; i < 10; i++) {
      const team = new Team('teamt' + i, i % 2 === 0 ? true : false);
      this.teamsNamesList[i] = team;
    }

    return this.teamsNamesList;
  }
  getTeamsFalse(): Array<Team> {
    for (let i = 1; i < 10; i++) {
      const team = new Team('teamt' + i,   false);
      this.teamsNamesList[i] = team;
    }

    return this.teamsNamesList;
  }
  updateTheTeamsNames(teamer: Team) {

    this.teamsNamesList.forEach(element => {
      if (teamer.name === element.name) {
        console.log('some: ' + element.name + ' fav: ' + element.isFavorite);
        this.teamsNamesList[element.name] = teamer;
      }
    });

  }

  cacheTheTeamsNames(teamers: Array<Team>) {
    teamers.forEach(element => {
      console.log('some: ' + element.name + ' favorite: ' + element.isFavorite);
    });

    this.teamsNamesList = teamers;
  }
}

export class Team {
  public name: string;
  public isFavorite: boolean;

  constructor(name: string, isFavorite: boolean) {
    this.name = name;
    this.isFavorite = isFavorite;
   }
}
