import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'
import { useGetRestaurantsListQuery } from '../../services/api'

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
  nome: string
  key: number
  descricao: string
  porcao: string
}
const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsListQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
