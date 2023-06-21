import { ExternalContainer, Image, Title } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Tag from '../Tag'

const Banner = () => (
  <>
    <ExternalContainer>
      <Image style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="overlay"></div>
        <div className="container">
          <Tag size="big">Italiana</Tag>
          <Title>La Dolce Vita Trattoria</Title>
        </div>
      </Image>
    </ExternalContainer>
  </>
)

export default Banner
