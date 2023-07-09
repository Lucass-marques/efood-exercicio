import marguerita from '../../assets/images/marguerita.png'
import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import { Food } from '../Home'

const foods: Food[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  },
  {
    id: 2,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cover: marguerita,
    amount: 'Serve: de 2 a 3 pessoas',
    price: 69.9
  }
]

const Profiles = () => (
  <>
    <ProfileHeader />
    <Banner />
    <FoodsList foods={foods} />
  </>
)

export default Profiles
