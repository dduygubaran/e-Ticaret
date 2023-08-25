import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FavoritesModel } from '../../models/favorites.model';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  favorites: FavoritesModel[] = [];
  API: string = enviroment.API;

  constructor(private http: HttpClient) {
    this.getFavorites();
  }

  delete(id: number) {
    this.http.delete<any>(this.API + 'favorites/' + id).subscribe(() => {
      this.getFavorites();
    });
  }

  getFavorites() {
    this.http.get<any>(this.API + 'favorites').subscribe((data) => {
      this.favorites = data;
    });
  }
}
