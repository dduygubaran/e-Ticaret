import { Injectable } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  baskets: BasketModel[] = [];
  API: string = enviroment.API;

  constructor(
    private http: HttpClient
  ) {
    this.getBasket();
   }

  delete (id: number) {
    this.http.delete<any>(this.API + 'baskets/' + id).subscribe(()=>{
      this.getBasket();
    });
  }

  getBasket() {
    this.http.get<any>(this.API + "baskets").subscribe((data)=>{
      this.baskets=data;
    })
  }
}
