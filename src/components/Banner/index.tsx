import { useState, useEffect } from 'react'

import { ExternalContainer, Image, Title } from './styles'
import Tag from '../Tag'
import { Restaurant } from '../../pages/Home'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching restaurant:', error)
        setIsLoading(false)
      })
  }, [id])

  if (isLoading) {
    return <div>Carregando...</div>
  }
  return (
    <>
      {restaurant && (
        <ExternalContainer>
          <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
            <div className="overlay"></div>
            <div className="container">
              <Tag size="big">{restaurant.tipo}</Tag>
              <Title>{restaurant.titulo}</Title>
            </div>
          </Image>
        </ExternalContainer>
      )}
    </>
  )
}

export default Banner
