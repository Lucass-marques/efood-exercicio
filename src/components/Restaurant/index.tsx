import {
  Card,
  Title,
  Description,
  Image,
  Content,
  GradeContainer,
  Star,
  TitleContainer,
  Grade
} from './styles'

import star from '../../assets/images/star.svg'
import Tag from '../Tag'

const Restaurant = () => (
  <>
    <Card>
      <Image src="//placehold.it/472x217" />
      <Content>
        {/* <Tag>Tipo</Tag> */}
        <TitleContainer>
          <Title>Hioki Sushi </Title>
          <GradeContainer>
            <Grade>4.6</Grade>
            <Star src={star} />
          </GradeContainer>
        </TitleContainer>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <Tag marginBottom="8px">Saiba mais</Tag>
      </Content>
    </Card>
  </>
)

export default Restaurant
