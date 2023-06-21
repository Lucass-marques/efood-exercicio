import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.lightred};
  padding: 8px;
`

export const Image = styled.img`
  width: 100%;
  display: block;
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  display: block;
  color: ${colors.lightgray};
  padding-top: 8px;
  padding-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 8px;
  color: ${colors.lightgray};
`
