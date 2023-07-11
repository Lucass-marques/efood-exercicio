import { useState, useEffect } from 'react'
import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import { Food, Restaurant } from '../Home'
import { useParams } from 'react-router-dom'

const Profiles = () => {
  const [foods, setFoods] = useState<Food[]>([])
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const { id } = useParams()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const restaurant = data.find((r: Restaurant) => r.id === Number(id))
          if (restaurant) {
            setFoods(restaurant.cardapio)
            setRestaurant(restaurant)
          }
        } else {
          console.error('Invalid data format')
        }
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error)
      })
  }, [id])

  if (!restaurant) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <ProfileHeader />
      <Banner />
      <FoodsList foods={foods} />
    </>
  )
}

export default Profiles
