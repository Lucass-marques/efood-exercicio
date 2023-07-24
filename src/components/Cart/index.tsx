import { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { RootReducer } from '../../store'

import { usePurchaseMutation } from '../../services/api'

import { ButtonAddCart, ButtonLinkCart } from '../Button/styles'
import { Description } from '../Restaurant/styles'
import {
  ButtonContainer,
  CardContainer,
  CartContainer,
  CloseButton,
  ConfirmationContainer,
  ConfirmationSidebar,
  Container,
  FlexRow,
  InputGroup,
  Overlay,
  PaymentContainer,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductText,
  Row,
  Sidebar,
  TotalValue,
  TotalValueContainer
} from './styles'

import { clear, close, remove, open } from '../../store/reducers/cart'
import parseToBrl from '../../utils'
import Button from '../Button'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const [address, setAddress] = useState(false)
  const [payment, setPayment] = useState(false)

  const closeCart = () => {
    dispatch(close())
    setAddress(true)
  }

  const closeOverlay = () => {
    dispatch(close())
    setAddress(false)
    setPayment(false)
  }

  const backCart = (e: FormEvent) => {
    e.preventDefault()
    dispatch(open())
    setAddress(false)
  }

  const openPayment = (e: FormEvent) => {
    e.preventDefault()
    setAddress(false)
    setPayment(true)
  }

  const backAddress = (e: FormEvent) => {
    e.preventDefault()
    setPayment(false)
    setAddress(true)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentValue) => {
      return (acc += currentValue.preco)
    }, 0)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      zipCode: '',
      numberHouse: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome da cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(10, 'O campo precisa ter 9 caracteres')
        .max(10, 'O campo precisa ter 9 caracteres')
        .required('O campo é obrigatório'),
      numberHouse: Yup.string()
        .min(1, 'O campo precisa ter 1 caracteres')
        .max(4, 'O campo precisa ter 4 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        1,
        'O nome precisa ter pelo menos 1 caractere'
      ),
      cardOwner: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter pelo menos 19 caracteres')
        .max(20, 'O campo precisa ter pelo menos 19 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 7 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 7 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.numberHouse),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.key,
          price: item.preco
        }))
      })
    }
  })

  return (
    <>
      <div>
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closeOverlay} />
          <Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <Container key={item.key}>
                      <ProductContainer>
                        <ProductImage src={item.foto} alt={item.nome} />
                        <ProductText>
                          <ProductName>{item.nome}</ProductName>
                          <Description>{parseToBrl(item.preco)}</Description>
                        </ProductText>
                        <CloseButton onClick={() => removeItem(item.key)} />
                      </ProductContainer>
                    </Container>
                  ))}
                </ul>
                <TotalValueContainer>
                  <TotalValue>Valor total</TotalValue>
                  <TotalValue>{parseToBrl(getTotalPrice())}</TotalValue>
                </TotalValueContainer>
                <ButtonAddCart onClick={closeCart}>
                  Continuar com a entrega
                </ButtonAddCart>
              </>
            ) : (
              <p>
                O carrinho está vazio, adicione ao menos um item para continuar
                com a compra.
              </p>
            )}
          </Sidebar>
        </CartContainer>
      </div>

      {isSuccess && data ? (
        <ConfirmationContainer>
          <Overlay onClick={closeOverlay} />
          <ConfirmationSidebar>
            <h3>Pedido realizado - N°: {data?.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>

            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>

            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>

            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <ButtonLinkCart
              to="/"
              type="link"
              title="Clique aqui para voltar para a home"
              onClick={() => closeCart}
            >
              Concluir
            </ButtonLinkCart>
          </ConfirmationSidebar>
        </ConfirmationContainer>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <CardContainer className={address ? 'is-open' : ''}>
            <Overlay onClick={closeOverlay} />
            <Sidebar>
              <h3>Entrega</h3>
              <Row>
                <InputGroup>
                  <label htmlFor="fullName">Quem irá receber</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('address') ? 'error' : ''}
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('city') ? 'error' : ''}
                  />
                </InputGroup>
              </Row>
              <FlexRow>
                <InputGroup>
                  <label htmlFor="zipCode">CEP</label>
                  <InputMask
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    mask="99.999-999"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="numberHouse">Número</label>
                  <input
                    id="numberHouse"
                    type="text"
                    name="numberHouse"
                    value={form.values.numberHouse}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numberHouse') ? 'error' : ''}
                  />
                </InputGroup>
              </FlexRow>
              <InputGroup>
                <label className="custom-label" htmlFor="complement">
                  Complemento (opcional)
                </label>
                <input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </InputGroup>
            </Sidebar>
            <ButtonContainer>
              <ButtonAddCart onClick={openPayment}>
                Continuar para pagamento
              </ButtonAddCart>
              <ButtonAddCart onClick={backCart}>
                Voltar ao carrinho
              </ButtonAddCart>
            </ButtonContainer>
          </CardContainer>

          <PaymentContainer className={payment ? 'is-open' : ''}>
            <Overlay onClick={closeOverlay} />
            <Sidebar>
              <h3>Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}</h3>
              <Row>
                <InputGroup>
                  <label htmlFor="cardOwner">Nome no cartão</label>
                  <input
                    id="cardOwner"
                    type="text"
                    name="cardOwner"
                    value={form.values.cardOwner}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cardOwner') ? 'error' : ''}
                  />
                </InputGroup>
                <FlexRow>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      id="cardNumber"
                      type="text"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      mask="9999 9999 9999 9999"
                    />
                  </InputGroup>
                  <InputGroup maxWidth="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      id="cardCode"
                      type="text"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      mask="999"
                    />
                  </InputGroup>
                </FlexRow>
              </Row>
              <FlexRow>
                <InputGroup>
                  <label htmlFor="expiresMonth">Mês Vencimento</label>
                  <InputMask
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('expiresMonth') ? 'error' : ''
                    }
                    mask="99"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                    mask="99"
                  />
                </InputGroup>
              </FlexRow>
            </Sidebar>
            <ButtonContainer>
              <Button
                type="submit"
                onClick={form.handleSubmit}
                title="clique aqui para finalizar a compra"
                disabled={isLoading}
              >
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <ButtonAddCart onClick={backAddress}>
                Voltar para a edição do endereço
              </ButtonAddCart>
            </ButtonContainer>
          </PaymentContainer>
        </form>
      )}
    </>
  )
}

export default Cart
