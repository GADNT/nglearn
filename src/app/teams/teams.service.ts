import { Injectable } from '@angular/core';

@Injectable()
export class TeamsService {

  getTeams(): Array<string> {
    const teamsNames: Array<string> = [];

    for (let i = 1; i < 10; i++ ) {
      teamsNames[i] =  'teamt' + i ;
    }

    return teamsNames;
  }

}

