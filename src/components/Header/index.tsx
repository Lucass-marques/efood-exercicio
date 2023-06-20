import { HeaderBar, Title, Logo } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="Logo eFood" />
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
