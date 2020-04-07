import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchListComponent } from './paginas/movie/search-list/search-list.component';
import { GenresListComponent } from './paginas/movie/genres-list/genres-list.component';
import { ViewMovieComponent } from './paginas/movie/view-movie/view-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './body/search/search.component';
import { SelectGenersComponent } from './body/select-geners/select-geners.component';
import { NavComponent } from './body/nav/nav.component';
import { NoFoundComponent } from './paginas/movie/no-found/no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    GenresListComponent,
    ViewMovieComponent,
    SearchComponent,
    SelectGenersComponent,
    NavComponent,
    NoFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
