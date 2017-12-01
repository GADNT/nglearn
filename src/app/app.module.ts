import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamsComponent } from './teams.component';
import { AuthorsComponent } from './authors/authors.component';
import { TeamsService } from './teams.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
