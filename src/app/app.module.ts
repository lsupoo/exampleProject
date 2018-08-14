import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
