import { AfterContentChecked, Component } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements AfterContentChecked {

baskets: BasketModel[] = [];
basket: any;

  constructor(
    private basketService: BasketService
  ){}

  ngAfterContentChecked(): void {
    this.baskets = this.basketService.baskets;
  }

  deleteFromBasket(id:number) {
    this.basketService.delete(id);
  }

}
