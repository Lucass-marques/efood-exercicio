import React from 'react'

import Restaurant from '../../models/Restaurant'
import { List } from './styles'
import Restaurante from '../Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <Restaurante
          key={restaurant.id}
          title={restaurant.title}
          description={restaurant.description}
          image={restaurant.image}
          infos={restaurant.infos}
          grade={restaurant.grade}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
