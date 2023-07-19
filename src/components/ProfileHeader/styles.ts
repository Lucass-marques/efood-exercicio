import { styled } from 'styled-components'

import { breakpoints, colors } from '../../styles'
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

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`

export const LinkHome = styled.a`
  text-decoration: none;
  color: ${colors.lightred};
  border: none;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const CartButton = styled.a`
  cursor: pointer;
  border: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.lightred};
  text-decoration: none;
`
