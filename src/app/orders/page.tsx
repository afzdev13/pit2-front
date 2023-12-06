'use client'
import { useEffect, useState } from "react"
import { UserIcon } from "../components/UserIcon"
import { IOrder } from "../interfaces/order"
import { api } from "../services/api"
import { Card } from "../components/Card"

export default function Orders() {

  const [orders, setOrders] = useState<IOrder[]>([])

  const getOrders = async() => {
    try {
      const {data} = await api.get('/order')
      setOrders(data)
    } catch(err) {
      console.log({err})
    }
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 text-black">
      <div className='w-full flex row justify-between'>
        <h1>Restaurante PIT2</h1>
        <UserIcon />
      </div>

      <div className="flex flex-wrap gap-8 flex-row">
      {
        orders.map((order, index) => 
          {
            return (
              <Card key={`orders${index}`}>
                <p>id: {order.id}</p>
                <p>Items:</p>
                {order.orderItems.map((item, indexItem) => {
                  return (
                    <p key={`orderItem${indexItem}`}>{item.item.name}</p>
                  )
                })}
                <p>Cliente: {order.user.name}</p>
                <p>Endereço: {order.user.address}</p>
              </Card>
            )
          }
        )
      }
      </div>
    </main>
  )
}