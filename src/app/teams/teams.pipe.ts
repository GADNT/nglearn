import { Pipe, PipeTransform } from '@angular/core';
import { Team } from './teams.service';
import { fail } from 'assert';

@Pipe({
    name: 'tpipes'
})
export class TeamPipe implements PipeTransform {

    transform(value: Array<Team>) {
        const tpipes = [];

        value.forEach(element => {
            tpipes.push({name: element.name, isFavorite: element.isFavorite} );
        });

        return tpipes;
     }
}
