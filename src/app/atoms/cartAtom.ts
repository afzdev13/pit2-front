import { atom } from "jotai";
import { IITem } from "../interfaces/item";

const CartAtom = atom<IITem[]>([])

export const CartReadWrite = atom(
  (get) => get(CartAtom),
  (_get, set, Cart: IITem[]) => set(CartAtom, Cart)
)
