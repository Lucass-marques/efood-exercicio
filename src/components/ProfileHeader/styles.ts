import { styled } from 'styled-components'

import { colors } from '../../styles'
import vector from '../../assets/images/Vector.svg'

export const Header = styled.header`
  background-image: url(${vector});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colors.lightgray};
  font-weight: 900;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 186px;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkHome = styled.a`
  text-decoration: none;
  color: ${colors.lightred};
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const LinkCart = styled.a`
  cursor: pointer;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.lightred};
`
