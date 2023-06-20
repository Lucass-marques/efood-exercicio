import { Image, Title } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Tag from '../Tag'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Italiana</Tag>
      <Title>La Dolce Vita Trattoria</Title>
    </div>
  </Image>
)

export default Banner
