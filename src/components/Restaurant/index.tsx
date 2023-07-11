import { useState, useEffect } from 'react'

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
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string
  capa: string
  destacado?: boolean
  id: number
}

const Restaurante = ({
  titulo,
  avaliacao,
  descricao,
  tipo,
  capa,
  destacado,
  id
}: Props) => {
  const [restaurantTags, setRestaurantTags] = useState<string[]>([])

  useEffect(() => {
    const getRestaurantTags = () => {
      const tags: string[] = []

      if (destacado) {
        tags.push('Destaque da semana')
      }

      if (tipo) {
        tags.push(tipo)
      }

      return tags
    }

    setRestaurantTags(getRestaurantTags())
  }, [tipo, destacado])
  return (
    <>
      <Card>
        <Image src={capa} alt={titulo} />
        <Infos>
          {restaurantTags.map((tipo) => (
            <Tag key={tipo}>{tipo}</Tag>
          ))}
        </Infos>
        <ContentContainer>
          <Content>
            <TitleContainer>
              <Title>{titulo}</Title>
              <GradeContainer>
                <Grade>{avaliacao}</Grade>
                <Star src={star} />
              </GradeContainer>
            </TitleContainer>
            <Description>{descricao}</Description>
            <TagContainer marginBottom="8px">
              <Link to={`/profiles/${id}`}>Saiba Mais</Link>
            </TagContainer>
          </Content>
        </ContentContainer>
      </Card>
    </>
  )
}

export default Restaurante
