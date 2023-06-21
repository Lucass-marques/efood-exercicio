import { ButtonAddCart } from '../Button/styles'
import { Card, Description, Image, Title } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const FoodElement = ({ title, image, description }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <ButtonAddCart>Adicionar ao carrinho</ButtonAddCart>
  </Card>
)

export default FoodElement
