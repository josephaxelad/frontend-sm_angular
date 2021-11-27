import { CartLine } from "./cart-line";

export class Cart {
  cart! : CartLine[];
  price : number = 0;
  qty : number = 0;
  weight : number = 0;
  deliveryPrice : number = 0;
}
