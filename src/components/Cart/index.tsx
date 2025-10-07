import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'

import { Button } from '../Cardapio/styles'
import { formataPreco } from '../ModalProduct'

import * as S from './styles'
import { useFormik } from 'formik'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [step, setStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')
  const dispatch = useDispatch()
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
      setStep('confirmation')
      dispatch(clear())
    }
  })

  const closeCart = () => dispatch(close())

  const buySuccess = () => {
    dispatch(close())
    setStep('cart')
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <S.SideBar>
          {step === 'cart' && (
            <>
              {items.length > 0 ? (
                <>
                  <ul>
                    {items.map((item, index) => (
                      <div key={`${item.id}-${index}`}>
                        <S.CartItem>
                          <img src={item.foto} />
                          <div>
                            <h3>{item.nome}</h3>
                            <span>{formataPreco(item.preco)}</span>
                          </div>
                          <button onClick={() => removeItem(item.id)} />
                        </S.CartItem>
                      </div>
                    ))}
                  </ul>
                  <S.Prices>
                    Valor total <span>{formataPreco(getTotalPrice())}</span>
                  </S.Prices>
                  <Button type="button" onClick={() => setStep('delivery')}>
                    Continuar com a entrega
                  </Button>
                </>
              ) : (
                <p className="empty-text">
                  O carrinho está vazio, adicione pelo menos um produto para
                  continuar a compra
                </p>
              )}
            </>
          )}
          {step === 'delivery' && (
            <>
              <S.DivContainer>
                <h3>Entrega</h3>
                <label htmlFor="fullName">Quem irá receber</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('fullName') ? 'error' : ''}
                />
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                />
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('city') ? 'error' : ''}
                />
                <div>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      mask="99.999-999"
                      maskChar={null}
                      id="cep"
                      name="cep"
                      type="text"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cep') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="houseNumber">Número</label>
                    <InputMask
                      mask="999999"
                      maskChar={null}
                      id="houseNumber"
                      name="houseNumber"
                      type="text"
                      value={form.values.houseNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('houseNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  name="complement"
                  type="text"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                />
              </S.DivContainer>
              <Button
                type="button"
                onClick={() => setStep('payment')}
                marginTop="16px"
              >
                Continuar com o pagamento
              </Button>
              <Button
                type="button"
                onClick={() => setStep('cart')}
                marginTop="8px"
              >
                Voltar para o carrinho
              </Button>
            </>
          )}
          {step === 'payment' && (
            <>
              <S.DivContainer>
                <h3>
                  Pagamento - Valor a pagar
                  <span>{formataPreco(getTotalPrice())}</span>
                </h3>
                <label htmlFor="cardDisplayName">Nome do cartão</label>
                <input
                  id="cardDisplayName"
                  name="cardDisplayName"
                  type="text"
                  value={form.values.cardDisplayName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('cardDisplayName') ? 'error' : ''
                  }
                />
                <div>
                  <S.InputGroup maxWidth="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      mask="9999 9999 9999 9999"
                      maskChar={null}
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="88px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      mask="999"
                      maskChar={null}
                      id="cardCode"
                      name="cardCode"
                      type="text"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                    />
                  </S.InputGroup>
                </div>
                <div>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      mask="99"
                      maskChar={null}
                      id="expiresMonth"
                      name="expiresMonth"
                      type="text"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="155px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      mask="99"
                      maskChar={null}
                      id="expiresYear"
                      name="expiresYear"
                      type="text"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                    />
                  </S.InputGroup>
                </div>
              </S.DivContainer>
              <Button type="submit" marginTop="16px" disabled={isLoading}>
                {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
              </Button>
              <Button onClick={() => setStep('delivery')} marginTop="8px">
                Voltar para a edição de endereço
              </Button>
            </>
          )}
          {isSuccess && data && step === 'confirmation' && (
            <>
              <S.DivContainer>
                <h3>Pedido realizado - {data.orderId}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p className="margin-top">
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p className="margin-top">
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p className="margin-top">
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
              </S.DivContainer>
              <Button onClick={buySuccess} marginTop="16px">
                Concluir
              </Button>
            </>
          )}
        </S.SideBar>
      </S.CartContainer>
    </form>
  )
}

export default Cart
