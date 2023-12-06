'use client'
import { useCart } from "@/app/hooks/useCart";
import { Card } from "../../Card";
import { Button } from "../../Button";
import { useEffect, useState } from "react";
import { IPaymentMethod } from "@/app/interfaces/paymentMethod";
import { api } from "@/app/services/api";
import { useUser } from "@/app/hooks/useUser";

type CardOpenProps = {
  action: () => void;
};

export const CartOpen = ({ action }: CardOpenProps) => {

  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod[]>([])
  const [paymentMethodSelected, setPaymentMethodSelected] = useState('')

  const getPaymentsMethods = async() => {
    try {
      const {data} = await api.get('/payment-methods')
      setPaymentMethod(data);
    } catch(err) {
      console.log({err})
    }
  }

  const { Cart, setCart } = useCart();
  const { user } = useUser()

  useEffect(() => {getPaymentsMethods()}, [])

  const save = async() => {
    try {
      const {data} = await api.post('/order', {userId: user?.id})
      for(let i = 0; i < Cart.length; i++) {
        await api.post('/order-items', {itemId: Cart[i].id, orderId: data})
      }
      await api.post('/order-payment-methods', {paymentMethodId: paymentMethodSelected, orderId: data})
      alert('Pedido realizado com sucesso')
    } catch(err) {
      console.log({err})
    }
  }

  return (
    <div className="h-[30rem] w-[20rem] rounded bg-cyan-500 p-10 overflow-scroll flex flex-col gap-4 text-stone-800 zIndex-2 fixed bottom-20 right-20">
      <Button text={'Fechar'} action={action} secundary />
      {Cart.map((item, index) => {
        return (
          <Card
            key={`CartOpen${index}`}
            className="flex flex-col justify-between px-2 gap-4 w-full"
          >
            <div className="flex flex-row justify-between w-full">
              <p>{item.name}</p>
              <p>Valor: {item.value}</p>
            </div>

            <Button
              text="Remover"
              action={() => {
                const aux = [...Cart]
                aux.splice(index, 1)
                setCart(aux)
              }}
            />
          </Card>
        );
      })}
      <div className="flex flex-row w-full justify-between">
        <h1>Quantidade total:</h1>
        <h1>{Cart.length}</h1>
      </div>
      <div className="flex flex-row w-full justify-between">
        <h1>Valor total:</h1>
        <h1>
          {Cart.reduce(
            (soma, objeto) =>
              parseFloat(soma.toString()) + parseFloat(objeto.value.toString()),
            0
          ).toFixed(2)}
        </h1>
      </div>

      <div className="flex flex-row w-full justify-between">
        <h1>Selecione o método de pagamento:</h1>
        <select onChange={(e) => setPaymentMethodSelected(e.target.value)} >
          {
            paymentMethod.map((pay, index) => {
              return (
                <option key={`CArtOpenPayments${index}`} value={pay.id}>{pay.name}</option>
              )
            })
          }
        </select>
      </div>

      <Button text='Finalizar compra' secundary action={save} />

    </div>
  );
};
