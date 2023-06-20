import { styled } from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.lightgray};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 125px;
    height: 57.5px;
  }
`

export const Title = styled.h3`
  font-size: 36px;
  font-weight: 900;
  line-height: 43px;
  padding-top: 200px;
  text-align: center;
`
