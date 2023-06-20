import { HeaderBar, Title } from './styles'

import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
    <img src={vector} />
    <img src={logo} alt="Logo eFood" />
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
