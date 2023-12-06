import { useCart } from "@/app/hooks/useCart";
import { ShoppingCart } from "react-feather";

type CardClosedProps = {
  action: () => void;
};

export const CardClosed = ({ action }: CardClosedProps) => {

  const {Cart} = useCart()

  return (
    <div
      className="h-16 w-16 bg-cyan-500 cursor-pointer rounded-full flex justify-center items-center zIndex-2 fixed bottom-20 right-20"
      onClick={action}
    >
      <ShoppingCart />
      {Cart.length ? <div className="fixed bottom-24 right-20 rounded-full bg-red-600 text-stone-50"><h1>{Cart.length}</h1></div>: null}
      
    </div>
  );
};
