import { Link } from 'react-router-dom'

import { styled } from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.lightgray};
  color: ${colors.lightred};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  border: none;
  display: block;
  width: 100%;
  cursor: pointer;
`

export const ButtonAddCart = styled(ButtonContainer)`
  display: block;
  background-color: ${colors.lightgray};
  color: ${colors.lightred};
  padding: 4px 84px;
  border: none;
  cursor: pointer;
  width: 100%;
  white-space: no-wrap;
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

export const ButtonLinkCart = styled(Link)`
  background-color: ${colors.lightgray};
  color: ${colors.lightred};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-align: center;
  text-decoration: none;
`
