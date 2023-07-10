import { useState } from 'react'
import { ButtonAddCart } from '../Button/styles'
import { Card, Description, Image, Title } from './styles'
import Modal from '../Modal'

type Props = {
  nome: string
  descricao: string
  porcao: string
  preco: number
  foto: string
}

const FoodElement = ({ nome, descricao, porcao, preco, foto }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const formatPrices = (preco: number) => {
    return parseFloat(
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(preco)
    )
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <Card>
      <Image src={foto} alt={nome} />
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
      <ButtonAddCart onClick={openModal}>Adicionar ao carrinho</ButtonAddCart>
      {modalOpen && (
        <Modal
          nome={nome}
          descricao={descricao}
          porcao={porcao}
          foto={foto}
          preco={formatPrices(preco)}
          closeModal={closeModal}
        />
      )}
    </Card>
  )
}

export default FoodElement
