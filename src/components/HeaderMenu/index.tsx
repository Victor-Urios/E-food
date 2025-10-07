import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { Headerbar, LogoEfood } from '../Header/styles'
import { Container, TitleLink } from './styles'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <Headerbar>
      <div>
        <Container>
          <TitleLink as={Link} to="/">
            Restaurantes
          </TitleLink>
          <LogoEfood />
          <span onClick={openCart}>{items.length} produto(s) no carrinho</span>
        </Container>
      </div>
    </Headerbar>
  )
}

export default HeaderMenu
