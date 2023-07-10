import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: number
  descricao: string
  capa: string
}

export type Food = {
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data)
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error)
      })
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
