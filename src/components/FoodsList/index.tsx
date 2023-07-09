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
          key={food.id}
          title={food.name}
          description={food.description}
          amount={food.amount}
          cover={food.cover}
          price={food.price}
        />
      ))}
    </Foods>
  </div>
)

export default FoodsList
