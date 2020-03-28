import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchListComponent } from './movie/search-list/search-list.component';
import { GenresListComponent } from './movie/genres-list/genres-list.component';
import { ViewMovieComponent } from './movie/view-movie/view-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    GenresListComponent,
    ViewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
