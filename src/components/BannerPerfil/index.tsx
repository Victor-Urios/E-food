import { Banner, BoxInfos, Category, Title } from './styles'

import { Restaurantes } from '../../pages/Home'

type Props = {
  restaurant: Restaurantes
}

const BannerPerfil = ({ restaurant }: Props) => (
  <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <BoxInfos>
      <div className="container">
        <Category>{restaurant.tipo}</Category>
        <Title>{restaurant.titulo}</Title>
      </div>
    </BoxInfos>
  </Banner>
)

export default BannerPerfil
