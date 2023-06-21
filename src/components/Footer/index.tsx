import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook_vector.svg'
import instagram from '../../assets/images/instagram_vector.svg'
import twitter from '../../assets/images/twitter_vector.svg'
import { Container, FooterDescription, FooterIcons, LogoFooter } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <LogoFooter>
        <img src={logo} alt="logo eFood" />
      </LogoFooter>
      <FooterIcons>
        <img src={instagram} alt="logo Instagram" />
        <img src={facebook} alt="logo Facebook" />
        <img src={twitter} alt="logo Twitter" />
      </FooterIcons>
      <div>
        <FooterDescription>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </FooterDescription>
      </div>
    </div>
  </Container>
)

export default Footer
