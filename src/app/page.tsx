import { ItemsArea } from './components/ItemsArea'
import { CartIcon } from './components/CartIcon'
import { UserIcon } from './components/UserIcon'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-24">
      <div className='w-full flex row justify-between'>
        <h1>Restaurante PIT2</h1>
        <UserIcon />
      </div>

      <ItemsArea />
      <CartIcon />
    </main>
  )
}
