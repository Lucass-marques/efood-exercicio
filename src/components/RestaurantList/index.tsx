import React from 'react'
import { List } from './styles'
import Restaurante from '../Restaurant'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.tagged) {
      tags.push(...restaurant.infos)
    }

    return tags
  }
  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurante
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            image={restaurant.cover}
            infos={getRestaurantTags(restaurant.infos)}
            grade={restaurant.grade}
          />
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
