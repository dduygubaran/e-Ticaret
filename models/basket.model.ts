import { ProductsModel } from "./products.model";

export class BasketModel extends ProductsModel{

  override id: number = 0;
  override productName: string ="";
  override productDescription: string = "";
  override productPrice: string = "";
  override productImage: string ="";

}
