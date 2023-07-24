import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import fechar from '../../assets/images/lixeira-de-reciclagem 1.png'

type InputGroupProps = {
  maxWidth?: string
}

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

  p {
    color: ${colors.lightgray};
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

export const ConfirmationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const ConfirmationSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${colors.lightred};
  color: ${colors.lightgray};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  p {
    font-size: 14px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
    color: ${colors.lightgray};
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  margin-bottom: calc(32px - 16px);
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${colors.lightgray};
  }

  input {
    padding: 8px;
    border: 1px solid ${colors.white};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }

  .add-on {
    color: red;
  }

  #complement {
    margin-top: 8px;
  }
`
export const CardContainer = styled.div`
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

export const FlexRow = styled.div`
  display: flex;
  gap: 34px;

  label {
    display: block;
    color: ${colors.lightgray};
  }

  input {
    padding: 8px;
    border: 1px solid ${colors.white};
  }

  #cardNumber {
    width: 228px;
  }
`

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 386px;
  background-color: ${colors.lightred};
  position: absolute;
  top: 460px;
  right: 8px;
  z-index: 1;
  border: none;
`

export const PaymentContainer = styled.div`
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
