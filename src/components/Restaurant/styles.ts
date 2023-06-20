import { styled } from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.white};
  padding: 0;
  border: 1px solid ${colors.lightred};

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 16px;
`

export const GradeContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Star = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 8px;
`

export const Grade = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
`
