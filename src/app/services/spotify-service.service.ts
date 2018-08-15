import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class spotifyService{

  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;
  private access_token: string = 'BQDKRaO66H25Y4HQfE2epsdbeRmeR5OCLGvKdXVy7z2LveeDl_BnTDZ9r9WjS9XFyR42_QtLQtUzHfCcy18nrQMe0R31I-I-osF3qJ28haDW9jgCIpUrdmFdDArTWfKKW0_6ePAoGizH9uYiJHTmpaY4';
  constructor (private _http: HttpClient){
  }

  searchArtist(str:string){

      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);

      this.searchUrl = 'https://api.spotify.com/v1/search?q='+ str + '&type=artist&market=US&limit=5&offset=0';
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