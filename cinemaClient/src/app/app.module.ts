import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListCinemaComponent } from './components/list-cinema/list-cinema.component';
import { FilmComponent } from './pages/film/film.component';
import { SeanceComponent } from './pages/seance/seance.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    NotFoundComponent,
    ListCinemaComponent,
    FilmComponent,
    SeanceComponent,
    NavbarComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
