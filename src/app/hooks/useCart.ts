import { useAtom } from "jotai";
import { IITem } from "../interfaces/item";
import { CartReadWrite } from "../atoms/cartAtom";

type useCartProps = {
  Cart: IITem[];
  setCart: (Cart: IITem[]) => void;
}

export const useCart = (): useCartProps => {
  const [Cart, setCart] = useAtom(CartReadWrite);

  return {
    Cart,
    setCart,
  };
};
