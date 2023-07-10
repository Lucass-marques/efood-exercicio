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
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
  closeModal: () => void
}

const Modal = ({ nome, descricao, foto, preco, porcao, closeModal }: Props) => (
  <>
    <Overlay onClick={closeModal} />
    <ModalContainer>
      <ImageContainer>
        <ImageModal src={foto} />
      </ImageContainer>
      <ContentContainer>
        <TitleModal>{nome}</TitleModal>
        <DescriptionModal>{descricao}</DescriptionModal>
        <AmountPeople>{porcao}</AmountPeople>
        <AddCartButton>Adicionar ao carrinho - R$ {preco}</AddCartButton>
      </ContentContainer>
      <CloseIcon src={fechar} onClick={closeModal} />
    </ModalContainer>
  </>
)

export default Modal
