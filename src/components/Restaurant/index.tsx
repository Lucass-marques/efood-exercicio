import {
  Card,
  Title,
  Description,
  Image,
  Content,
  GradeContainer,
  Star,
  TitleContainer,
  Grade,
  Infos,
  ContentContainer
} from './styles'

import star from '../../assets/images/star.svg'
import Tag from '../Tag'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

type Props = {
  title: string
  grade: number
  description: string
  infos: string[]
  image: string
}

const Restaurante = ({ title, grade, description, infos, image }: Props) => (
  <>
    <Card>
      <Image src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <ContentContainer>
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
            <GradeContainer>
              <Grade>{grade}</Grade>
              <Star src={star} />
            </GradeContainer>
          </TitleContainer>
          <Description>{description}</Description>
          <TagContainer marginBottom="8px">
            <Link to="/profiles">Saiba Mais</Link>
          </TagContainer>
        </Content>
      </ContentContainer>
    </Card>
  </>
)

export default Restaurante
