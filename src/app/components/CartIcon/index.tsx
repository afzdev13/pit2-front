"use client";

import { useState } from "react";
import { CardClosed } from "./CartClosed";
import { CartOpen } from "./CartOpen";

export const CartIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <CartOpen action={() => setOpen(false)} />
      ) : (
        <CardClosed action={() => setOpen(true)} />
      )}
    </>
  );
};
