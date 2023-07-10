import { Food } from '../../pages/Home'
import FoodElement from '../FoodElement'
import { Foods } from './styles'

export type Props = {
  foods: Food[]
}

const FoodsList = ({ foods }: Props) => (
  <div className="container">
    <Foods>
      {foods.map((food) => (
        <FoodElement
          key={food.cardapio.id}
          nome={food.cardapio.nome}
          descricao={food.cardapio.descricao}
          porcao={food.cardapio.porcao}
          foto={food.cardapio.foto}
          preco={food.cardapio.preco}
        />
      ))}
    </Foods>
  </div>
)

export default FoodsList
