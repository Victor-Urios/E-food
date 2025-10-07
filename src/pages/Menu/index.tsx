import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { MenuItem, Restaurantes } from '../Home'

import BannerPerfil from '../../components/BannerPerfil'
import CardapioList from '../../components/CardapioList'
import HeaderMenu from '../../components/HeaderMenu'

const Menu = () => {
  const { id } = useParams()
  const [todosOsProdutos, setTodosOsProdutos] = useState<MenuItem[]>([])
  const [bannerRestaurant, setBannerRestaurant] = useState<Restaurantes | null>(
    null
  )

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: Restaurantes) => {
        if (res) {
          setBannerRestaurant(res)
          setTodosOsProdutos(res.cardapio)
        }
      })
  }, [id])

  return (
    <>
      <HeaderMenu />
      {bannerRestaurant && <BannerPerfil restaurant={bannerRestaurant} />}
      <CardapioList products={todosOsProdutos} />
    </>
  )
}

export default Menu
