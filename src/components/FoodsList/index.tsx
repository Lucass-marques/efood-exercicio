import Food from '../../models/Foods'
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
          title={food.title}
          description={food.description}
          image={food.image}
        />
      ))}
    </Foods>
  </div>
)

export default FoodsList
