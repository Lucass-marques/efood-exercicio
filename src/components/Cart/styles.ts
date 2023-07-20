import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import fechar from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.lightred};
  z-index: 1;
  padding: 32px 8px 0 8px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 95%;
  }
`

export const ProductContainer = styled.div`
  background-color: ${colors.lightgray};
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
`

export const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-bottom: 16px;
`
export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`

export const ProductText = styled.div`
  padding-left: 8px;
`

export const TotalValue = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.lightgray};
`

export const TotalValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 16px;
`

export const Container = styled.li`
  margin-bottom: 16px;
`

export const CloseButton = styled.button`
  background-image: url(${fechar});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: 12px;
  right: 8px;
  cursor: pointer;
`
