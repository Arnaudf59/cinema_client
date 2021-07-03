import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { FilmComponent } from './pages/film/film.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SeanceComponent } from './pages/seance/seance.component';

const routes: Routes = [
  { path:"cinema", component : CinemaComponent},
  { path:"cinema/:id/film", component : FilmComponent},
  { path:"cinema/:id/film/:idfilm/seances", component : SeanceComponent},
  { path: "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
