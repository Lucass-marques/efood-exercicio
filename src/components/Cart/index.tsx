import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { ButtonAddCart } from '../Button/styles'
import { Description } from '../Restaurant/styles'
import {
  CartContainer,
  CloseButton,
  Container,
  Overlay,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductText,
  Sidebar,
  TotalValue,
  TotalValueContainer
} from './styles'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formatPrices = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <Container key={item.key}>
              <ProductContainer>
                <ProductImage src={item.foto} alt={item.nome} />
                <ProductText>
                  <ProductName>{item.nome}</ProductName>
                  <Description>{formatPrices(item.preco)}</Description>
                </ProductText>
                <CloseButton onClick={() => removeItem(item.key)} />
              </ProductContainer>
            </Container>
          ))}
        </ul>
        <TotalValueContainer>
          <TotalValue>Valor total</TotalValue>
          <TotalValue>{formatPrices(getTotalPrice())}</TotalValue>
        </TotalValueContainer>
        <ButtonAddCart>Continuar com a entrega</ButtonAddCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
