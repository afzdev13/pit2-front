import { atom } from "jotai";
import { IUser } from "../interfaces/user";

const UserAtom = atom<IUser | undefined>(undefined)

export const UserReadWrite = atom(
  (get) => get(UserAtom),
  (_get, set, user: IUser) => set(UserAtom, user)
)
