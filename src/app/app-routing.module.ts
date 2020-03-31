import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresListComponent } from './movie/genres-list/genres-list.component';
import { SearchListComponent } from './movie/search-list/search-list.component';
import { ViewMovieComponent } from './movie/view-movie/view-movie.component';
import { NoFoundComponent } from './movie/no-found/no-found.component';
import { HomeComponent } from './paginas/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {
    path: 'filmes',
    children: [
      {
        path: ':genero/:pagina',
        component: GenresListComponent
      },      
    ]
  },
  {
    path: 'buscar',
    children: [
      {
        path: ':buscar/:pagina',
        component: SearchListComponent
      },
    ]
  },
  {
    path: 'detalhes',
    children: [
      {
        path: ':id',
        component: ViewMovieComponent
      },      
    ]
  },
  {
    path: 'noFound',
    children: [
      {
        path: ':noFound',
        component: NoFoundComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
