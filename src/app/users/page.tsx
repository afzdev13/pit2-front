'use client'
import { useEffect, useState } from "react";
import { UserIcon } from "../components/UserIcon";
import { Button } from "../components/Button";
import { CreateUser } from "./CreateUser";
import { IUser } from "../interfaces/user";
import { api } from "../services/api";
import { Card } from "../components/Card";

export default function Users() {

  const [showForm, setShowForm] = useState<boolean>(false)
  const [users, setUsers] = useState<IUser[]>([])


  const getUsers = async() => {
    try {
      const {data} = await api.get('/users')
      setUsers(data);
    } catch(err) {
      console.log({err})
    }
  }

  useEffect(() => {getUsers()}, [])

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24 ">
    <div className="w-full flex row justify-between">
      <h1>Restaurante PIT2</h1>
      <UserIcon />
    </div>

    <div className="flex flex-col gap-4">
      {
        showForm ? <CreateUser goBack={() => setShowForm(false)} /> : <Button text={'Criar usuário'} action={() => setShowForm(true)} />
      }
      <div className="flex flex-col gap-4 text-black">
      {
        users.map((user, index) => {
          return (
            <Card key={`users${index}`}>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Endereco: {user.address}</p>
              <p>Cargo: {user.userRole.Role.name}</p>
            </Card>
          )
        })
      }
      </div>


    </div>

    </main>
  )
}