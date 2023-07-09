import { useState } from 'react'
import { ButtonAddCart } from '../Button/styles'
import { Card, Description, Image, Title } from './styles'
import Modal from '../Modal'

type Props = {
  title: string
  description: string
  amount: string
  cover: string
  price: number
}

const FoodElement = ({ title, cover, description, amount, price }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const formatPrices = (price: number) => {
    return parseFloat(
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price)
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
      <Image src={cover} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonAddCart onClick={openModal}>Adicionar ao carrinho</ButtonAddCart>
      {modalOpen && (
        <Modal
          title={title}
          description={description}
          amount={amount}
          image={cover}
          price={formatPrices(price)}
          closeModal={closeModal}
        />
      )}
    </Card>
  )
}

export default FoodElement
