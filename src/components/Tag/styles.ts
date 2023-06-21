import { styled } from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.lightred};
  color: ${colors.lightgray};
  font-size: ${(props) => (props.size === 'big' ? '32px' : '12px')};
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 12px')};
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${colors.lightgray};
  }
`
