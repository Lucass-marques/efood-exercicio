import { useState, useEffect } from 'react'
import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import { Food, Restaurant } from '../Home'
import { useParams } from 'react-router-dom'
import { useGetFoodsListQuery } from '../../services/api'

const Profiles = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: foods, isLoading } = useGetFoodsListQuery(id!)

  if (!foods) {
    return <h3>Carregando...</h3>
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
