import { styled } from 'styled-components'
import { colors } from '../../styles'

import vector from '../../assets/images/Vector.svg'

export const HeaderBar = styled.header`
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.lightgray};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 900;
  line-height: 43px;
  padding-top: 80px;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
