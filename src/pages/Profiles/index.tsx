import { useState, useEffect } from 'react'
import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'

// type Restaurant = {
//   id: number
//   titulo: string
//   destacado: boolean
//   tipo: string
//   avaliacao: number
//   descricao: string
//   capa: string
//   cardapio: Food[]
// }

const Profiles = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setFoods(data[0].cardapio)
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error)
      })
  }, [])

  return (
    <>
      <ProfileHeader />
      <Banner />
      <FoodsList foods={foods} />
    </>
  )
}

export default Profiles
