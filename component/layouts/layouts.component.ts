import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { enviroment } from 'src/enviroment/enviroment';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements AfterContentChecked {

  API: string = enviroment.API;
  baskets: BasketModel[] = [];

  constructor(
    private basket: BasketService
  ) {}

  ngAfterContentChecked(): void {
    this.getBaskets();
  }

  getBaskets() {
    this.baskets = this.basket.baskets;
  }




}

