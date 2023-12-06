'use client'
import { Card } from "../components/Card"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { IRole } from "../interfaces/role"
import { Button } from "../components/Button"

export default function SignIn() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [roles, setRoles] = useState<IRole[]>([])

  const getRoles = async() => {
    try { 
      const {data} = await api.get('/role')
      setRoles(data)
    } catch(err) {
      console.log({err})
    }
  }

  const save = async() => {
    try {
      const {data} = await api.post('/users', {
        name, email, password, address
      })
      await api.post('/user-role', {userId: data, roleId: roles.filter(r => r.name === 'COSTUMER')[0]?.id})
      alert('Usuario criado com sucesso')
    } catch(err) {
      console.log({err})
    }
  }

  useEffect(() => {
    getRoles()
  }, [])

  return (
    <Card className="flex flex-col w-full gap-8 text-black">
    <p>Criar usuário</p>
    <div className="flex flex-col w-full">
      <p>Nome:</p>
      <input value={name} className="border-color-black border-2" onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="flex flex-col w-full">
      <p>Email:</p>
      <input type="email" value={email} className="border-color-black border-2" onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="flex flex-col w-full">
      <p>Endereco:</p>
      <input  value={address} className="border-color-black border-2" onChange={(e) => setAddress(e.target.value)} />
    </div>
    <div className="flex flex-col w-full">
      <p>Password:</p>
      <input type="password" value={password} className="border-color-black border-2" onChange={(e) => setPassword(e.target.value)} />
    </div>

    <Button text={'Salvar'} action={() => save()}/>
  </Card>
  )
}