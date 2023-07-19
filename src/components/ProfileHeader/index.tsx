import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import { HeaderContainer, Header, LinkHome, Logo, CartButton } from './styles'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const ProfileHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header>
      <HeaderContainer className="container">
        <Link to="/">
          <LinkHome>Restaurantes</LinkHome>
        </Link>
        <Link to="/">
          <Logo src={logo} alt="logo eFood" />
        </Link>
        <CartButton onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CartButton>
      </HeaderContainer>
    </Header>
  )
}

export default ProfileHeader
