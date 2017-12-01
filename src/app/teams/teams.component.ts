import { Component } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
    selector: 'teams',
    templateUrl: './teams.component.html'

})
export class TeamsComponent {
    title = "GaD Team";
    teams;

    constructor(teamService: TeamsService) {
        this.teams = teamService.getTeams();
    }

}
