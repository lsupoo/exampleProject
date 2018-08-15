import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { RouterModule, Routes } from '@angular/router';
import { spotifyService } from './services/spotify-service.service'

import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'artists', component: SearchArtistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ spotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
