import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

export type Restaurant = {
  id: number
  title: string
  tagged: boolean
  infos: string[]
  type: string
  grade: number
  description: string
  cover: string
}

export type Food = {
  cover: string
  price: number
  id: number
  name: string
  description: string
  amount: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
