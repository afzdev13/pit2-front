'use client'
import { useState } from "react";
import { Card } from "../components/Card";
import { UserIcon } from "../components/UserIcon";
import { Button } from "../components/Button";
import { api } from "../services/api";

export default function Items() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState(0)

  const save = async() => {
    try {
      await api.post('/items', {name, description, value})
      alert('Item salvo')
      setName('')
      setDescription('')
      setValue(0)
    } catch(err) {
      console.log({err})
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 ">
      <div className="w-full flex row justify-between">
        <h1>Restaurante PIT2</h1>
        <UserIcon />
      </div>

      <Card className="flex flex-col w-full gap-8 text-black">
        <p>Criar item</p>
        <div className="flex flex-col w-full">
          <p>Nome:</p>
          <input value={name} className="border-color-black border-2" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col w-full">
          <p>Descrição:</p>
          <textarea value={description} className="border-color-black border-2" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex flex-col w-full">
          <p>Valor:</p>
          <input value={value} className="border-color-black border-2" type="number" onChange={(e) => setValue(parseFloat(e.target.value))} />
        </div>

        <Button text={'Salvar'} action={() => save()}/>
      </Card>
    </main>
  );
}
