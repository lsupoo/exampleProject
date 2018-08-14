import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class spotifyService{

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private access_token: string = 'BQCbaU8S3gESEHw75ASJJEHyx6ALcr3q1ln44n-IJwQtV2vnmSy2GX_lCywjfrOnJUJ2G4R1xtV28-RBSmaVpH26es_RfeRG8sHOrA4Zb9FJiGGWwMOIPN3oSmTGl_eqvJS-IaiVtyDVIlMwK0BdUzwz';
  constructor (private _http: HttpClient){
  }

  searchArtist(str:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      this.searchUrl = 'https://api.spotify.com/v1/search?q='+ str + '&type=artist&market=US&limit=20&offset=0';
      return this._http.get(this.searchUrl, {headers: headers }).pipe(
      map(res => res))
  }

  getArtist(id:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
      return this._http.get(this.artistUrl, {headers: headers }).pipe(
      map(res => res));
  }

  getAlbums(artistId:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
      this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+ '/albums';
      return this._http.get(this.albumsUrl, {headers: headers }).pipe(
        map(res => res));
  }

  getAlbum(id:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
      this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
      return this._http.get(this.albumUrl, {headers: headers }).pipe(
        map(res => res));
  }
}