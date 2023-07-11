import { Food } from '../../pages/Home'
import FoodElement from '../FoodElement'
import { Foods } from './styles'

export type Props = {
  foods: Food[]
}

const FoodsList = ({ foods }: Props) => {
  return (
    <div className="container">
      <Foods>
        {foods.length > 0 ? (
          foods.map((food) => {
            if (food) {
              return (
                <FoodElement
                  key={food.id}
                  nome={food.nome}
                  descricao={food.descricao}
                  porcao={food.porcao}
                  foto={food.foto}
                  preco={food.preco}
                />
              )
            }
          })
        ) : (
          <p>Não há alimentos disponíveis</p>
        )}
      </Foods>
    </div>
  )
}

export default FoodsList
