import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { AuthorsComponent } from './authors/authors.component';
import { TeamsService } from './teams/teams.service';
import { TeamPipe } from './teams/teams.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AuthorsComponent,
    TeamPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
