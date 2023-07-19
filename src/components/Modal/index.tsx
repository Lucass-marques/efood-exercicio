import { useDispatch } from 'react-redux'
import fechar from '../../assets/images/close 1.png'
import {
  AddCartButton,
  AmountPeople,
  CloseIcon,
  ContentContainer,
  DescriptionModal,
  ImageContainer,
  ImageModal,
  ModalContainer,
  Overlay,
  TitleModal
} from './styles'

import { add, open } from '../../store/reducers/cart'
import { Food } from '../../pages/Home'

type Props = {
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
  closeModal: () => void
}

const Modal = ({ nome, descricao, foto, preco, porcao, closeModal }: Props) => {
  const formatPrices = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const dispatch = useDispatch()

  const addToCart = () => {
    const foodItem: Food = {
      nome,
      descricao,
      foto,
      preco,
      porcao,
      key: 0
    }
    dispatch(add(foodItem))
    dispatch(open())
  }
  return (
    <>
      <Overlay onClick={closeModal} />
      <ModalContainer>
        <ImageContainer>
          <ImageModal src={foto} />
        </ImageContainer>
        <ContentContainer>
          <TitleModal>{nome}</TitleModal>
          <DescriptionModal>{descricao}</DescriptionModal>
          <AmountPeople>Serve: {porcao}</AmountPeople>
          <AddCartButton onClick={addToCart}>
            Adicionar ao carrinho - {formatPrices(preco)}
          </AddCartButton>
        </ContentContainer>
        <CloseIcon src={fechar} onClick={closeModal} />
      </ModalContainer>
    </>
  )
}

export default Modal
