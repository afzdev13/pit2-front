"use client";
import { IITem } from "@/app/interfaces/item";
import { api } from "@/app/services/api";
import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import { useCart } from "@/app/hooks/useCart";

export const ItemsArea = () => {
  const [items, setItems] = useState<IITem[]>([]);

  const { setCart, Cart } = useCart();

  const getItems = async () => {
    try {
      const { data } = await api.get("/items");
      setItems(data);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="flex flex-wrap gap-40 flex-row">
      {items.map((item, index) => {
        return (
          <Card
            key={`ItemsAreaitems${index}`}
            className="text-zinc-950 flex flex-1 flex-col gap-4"
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>R${item.value}</p>
            <Button
              text={
                Cart.map((c) => c.id).includes(item.id)
                  ? "Adicionar mais um"
                  : "Comprar"
              }
              action={() => setCart([...Cart, item])}
            />
          </Card>
        );
      })}
    </div>
  );
};
