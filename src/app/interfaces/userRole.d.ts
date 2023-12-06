import { IRole } from "./role";
import { IUser } from "./user";

export interface IUserRole {
  user: IUser
  Role: IRole
}