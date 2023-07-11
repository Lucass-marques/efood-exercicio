import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

export type Food = {
  foto: string
  preco: string
  id: number
  nome: string
  descricao: string
  porcao: string
}
const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  const { id } = useParams()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurants(res)
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error)
      })
  }, [id])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
