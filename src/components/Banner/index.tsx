import { useState, useEffect } from 'react'

import { ExternalContainer, Image, Title, Type } from './styles'
import Tag from '../Tag'
import { Restaurant } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useGetBannerQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()
  const { data: restaurant, isLoading } = useGetBannerQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      {restaurant && (
        <ExternalContainer>
          <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
            <div className="overlay"></div>
            <div className="container">
              <Type>{restaurant.tipo}</Type>
              <Title>{restaurant.titulo}</Title>
            </div>
          </Image>
        </ExternalContainer>
      )}
    </>
  )
}

export default Banner
