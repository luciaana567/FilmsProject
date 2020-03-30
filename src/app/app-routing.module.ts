import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresListComponent } from './movie/genres-list/genres-list.component';
import { SearchListComponent } from './movie/search-list/search-list.component';
import { ViewMovieComponent } from './movie/view-movie/view-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'fimes', pathMatch: 'full' },
  {
    path: 'filmes',
    children: [
      {
        path: '',
        component: ViewMovieComponent
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
