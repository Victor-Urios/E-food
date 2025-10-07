import { useState } from 'react'

import { List } from './styles'

import Cardapio from '../Cardapio'
import { MenuItem } from '../../pages/Home'
import ModalProduct from '../ModalProduct'

type Props = {
  products: MenuItem[]
}

const CardapioList = ({ products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: MenuItem) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <div className="container">
      <List>
        {products.map((produtos) => (
          <Cardapio
            key={produtos.id}
            title={produtos.nome}
            description={produtos.descricao}
            image={produtos.foto}
            onOpenModal={() => openModal(produtos)}
          />
        ))}

        {isModalOpen && selectedProduct && (
          <ModalProduct product={selectedProduct} onClose={closeModal} />
        )}
      </List>
    </div>
  )
}

export default CardapioList
