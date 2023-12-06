import { IOrder } from "./order"
import { IUserRole } from "./userRole"

export interface IUser {
  id: string
  name: string
  email: string
  address: string
  userRole: IUserRole
  orders: IOrder[]
}