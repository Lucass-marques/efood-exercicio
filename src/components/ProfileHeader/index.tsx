import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'

import { HeaderContainer, Header, LinkHome, Logo, LinkCart } from './styles'

const ProfileHeader = () => (
  <Header>
    <HeaderContainer className="container">
      <Link to="/">
        <LinkHome>Restaurantes</LinkHome>
      </Link>
      <Logo src={logo} alt="logo eFood" />
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </HeaderContainer>
  </Header>
)

export default ProfileHeader
