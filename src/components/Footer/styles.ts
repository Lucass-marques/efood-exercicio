import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.lightgray};
  padding: 40px 0;
`

export const LogoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 33px;
`

export const FooterIcons = styled.div`
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
`

export const FooterDescription = styled.p`
  font-size: 14px;
  line-height: 12px;
  text-align: center;
`
