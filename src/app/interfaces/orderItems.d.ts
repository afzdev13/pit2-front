import { IITem } from "./item";
import { IOrder } from "./order";

export interface OrderItems {
  order: IOrder
  item: IITem
}