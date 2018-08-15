import { Component, OnInit } from '@angular/core';
import { Item} from '../../interfaces/global'
import { spotifyService } from '../../services/spotify-service.service'
@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.css']
})
export class SearchArtistComponent implements OnInit {
  public searchStr : string = "Luis Miguel";
  public artists : Array<Item>;
  constructor(private _service : spotifyService) { }
  
  ngOnInit() {
  }

  public searchArtist() {
    this._service.searchArtist(this.searchStr)
    .subscribe(res =>{
        this.artists = res.artists.items;
    });
  }

}
