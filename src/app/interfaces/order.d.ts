import { OrderItems } from "./orderItems"
import { IPaymentMethod } from "./paymentMethod"
import { IUser } from "./user"

export interface IOrder {
  id: string
  orderItems: OrderItems[]
  paymentMethod: IPaymentMethod
  user: IUser
}