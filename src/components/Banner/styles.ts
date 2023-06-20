import { styled } from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  display: block;

  .container {
    position: relative;
    padding-top: 280px;
  }

  ${TagContainer} {
    position: absolute;
    top: 25px;
  }
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  line-height: 37px;
`
