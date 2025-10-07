import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList'
import Header from '../../components/Header'

export interface MenuItem {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home = () => {
  const [todosOsRestaurantes, setTodosOsRestaurantes] = useState<
    Restaurantes[]
  >([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setTodosOsRestaurantes(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurants={todosOsRestaurantes} />
    </>
  )
}

export default Home
