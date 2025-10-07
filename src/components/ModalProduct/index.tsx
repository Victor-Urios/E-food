import { useDispatch } from 'react-redux'

import imgClose from '../../assets/images/close.png'

import { Button } from '../Cardapio/styles'
import { Modal, ModalAbout, ModalContent, CloseImg } from './styles'

import { add, open } from '../../store/reducers/cart'
import { MenuItem } from '../../pages/Home'

type Props = {
  product: MenuItem
  onClose: () => void
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ModalProduct = ({ product, onClose }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add({ ...product }))
    dispatch(open())
    onClose()
  }

  return (
    <Modal className="visivel">
      <ModalContent className="container">
        <img src={product.foto} alt={product.nome} />
        <ModalAbout>
          <h3>{product.nome}</h3>
          <p>{product.descricao}</p>
          <Button
            onClick={() => {
              addToCart()
              onClose()
            }}
          >
            Adicionar ao carrinho - {formataPreco(product.preco)}
          </Button>
        </ModalAbout>
        <CloseImg onClick={onClose}>
          <img src={imgClose} alt="Fechar modal" />
        </CloseImg>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </Modal>
  )
}

export default ModalProduct
