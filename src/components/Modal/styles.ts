import { styled } from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  background-color: ${colors.lightred};
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  display: flex;
  aligm-items: center;
  justify-content: space-between;
`

export const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
`

export const ImageModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const TitleModal = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: start;
  margin-bottom: 16px;
`

export const DescriptionModal = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`

export const ContentContainer = styled.div`
  padding-left: 24px;
  padding-bottom: 16px;
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddCartButton = styled.button`
  background-color: ${colors.lightgray};
  color: ${colors.lightred};
  padding: 4px 8px;
  display: block;
  border: none;
  font-weight: 700;
  font-size: 14px;
  margin-top: 14px;
  cursor: pointer;
`

export const AmountPeople = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 32px;
`
