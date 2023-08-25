import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component } from '@angular/core';
import { enviroment } from 'src/enviroment/enviroment';
import { FavoritesService } from '../services/favorites.service';
import { FavoritesModel } from 'src/app/models/favorites.model';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements AfterContentChecked {

  API: string = enviroment.API;
  favorites : FavoritesModel[] = [];


  constructor(
    private favoritesService : FavoritesService
  ) {}

  ngAfterContentChecked(): void {
    this.favorites = this.favoritesService.favorites;
  }

  deleteFromFavorites() {
    this.favoritesService.delete;
  }


}
