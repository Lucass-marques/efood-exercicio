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

type Props = {
  title: string
  image: string
  description: string
  price: number
  amount: string
  closeModal: () => void
}

const Modal = ({
  title,
  description,
  image,
  price,
  amount,
  closeModal
}: Props) => (
  <>
    <Overlay onClick={closeModal} />
    <ModalContainer>
      <ImageContainer>
        <ImageModal src={image} />
      </ImageContainer>
      <ContentContainer>
        <TitleModal>{title}</TitleModal>
        <DescriptionModal>{description}</DescriptionModal>
        <AmountPeople>{amount}</AmountPeople>
        <AddCartButton>Adicionar ao carrinho - R$ {price}</AddCartButton>
      </ContentContainer>
      <CloseIcon src={fechar} onClick={closeModal} />
    </ModalContainer>
  </>
)

export default Modal
