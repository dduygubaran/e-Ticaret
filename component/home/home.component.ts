import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ProductsModel } from 'src/app/models/products.model';
import { enviroment } from 'src/enviroment/enviroment';
import { BasketService } from '../services/basket.service';
import { FavoritesService } from '../services/favorites.service';
import { BasketModel } from 'src/app/models/basket.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  API: string = enviroment.API;
  products: ProductsModel[] = [];
  product: ProductsModel = new ProductsModel();
  baskett: BasketModel = new BasketModel();
  baskets: BasketModel[] = [];


  constructor(
    private http: HttpClient,
    private basket: BasketService,
    private favorite: FavoritesService
    ) {}


  ngOnInit(): void {
    this.getProductList();
  }

  addProduct() {
    this.http.post<any>(this.API + "products", this.product).subscribe(()=>{
      this.getProductList();
      this.product = new ProductsModel();
    });
    error : (err: any) => console.log(err);
  }


  getProductList() {
    this.http.get<any>(this.API + "products").subscribe((res)=>{
      this.products = res;
    });
  }

  addToBasket(model: ProductsModel) {
    this.http.post<any>(this.API + "baskets", model).subscribe(()=>{
      console.log("Ürün eklendi");
      this.getBasket();
    });
  }

  getBasket() {
    this.http.get<any>(this.API + "baskets").subscribe((data)=>{
      this.basket.baskets=data;
    })
  }

  addToFavorites(model: ProductsModel) {
    this.http.post<any>(this.API + 'favorites', model).subscribe(()=>{
      console.log("Seçtiğiniz ürün favorilere eklendi");
      this.getFavorites();

    });
  }

  getFavorites() {
    this.http.get<any>(this.API + 'favorites').subscribe((data)=>{
      this.favorite.favorites=data;
    });
  }


}
