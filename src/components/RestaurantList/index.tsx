import React from 'react'
import { List } from './styles'
import Restaurante from '../Restaurant'
import { Restaurant } from '../../pages/Home'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurante
            key={restaurant.id}
            titulo={restaurant.titulo}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
            tipo={restaurant.tipo}
            avaliacao={restaurant.avaliacao}
            destacado={restaurant.destacado}
            id={restaurant.id}
          />
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
