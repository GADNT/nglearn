import { Component } from '@angular/core';
import { TeamsService } from './teams.service';
import { Team } from './teams.service';

@Component({
    selector: 'teams',
    templateUrl: './teams.component.html',

})
export class TeamsComponent {
    title = 'GaD Team';
    teams: Array<Team>;
    service: TeamsService;

    constructor(teamService: TeamsService) {
        this.teams = teamService.getTeams();
        this.service = teamService;
    }

    onClick(team) {
        team.isFavorite = !team.isFavorite;
        this.service.updateTheTeamsNames(team);
    }

    onReload() {
       return this.service.getTeamsFalse();
    }
}
