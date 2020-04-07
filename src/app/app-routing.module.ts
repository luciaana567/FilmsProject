import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresListComponent } from './paginas/movie/genres-list/genres-list.component';
import { SearchListComponent } from './paginas/movie/search-list/search-list.component';
import { ViewMovieComponent } from './paginas/movie/view-movie/view-movie.component';
import { NoFoundComponent } from './paginas/movie/no-found/no-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'filmes', pathMatch: 'full' },
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: GenresListComponent
      },
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
