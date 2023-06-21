import { Link } from 'react-router-dom'

import { styled } from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.lightred};
  color: ${colors.lightgray};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
`

export const ButtonAddCart = styled(ButtonContainer)`
  display: block;
  background-color: ${colors.lightgray};
  color: ${colors.lightred};
  padding: 4px 84px;
  border: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.lightred};
  color: ${colors.lightgray};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
`
