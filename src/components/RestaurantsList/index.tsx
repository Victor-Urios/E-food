import { List } from './styles'
import { Restaurantes } from '../../pages/Home'
import Restaurants from '../Restaurants'

type Props = {
  restaurants: Restaurantes[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurantes) => (
        <Restaurants
          title={restaurantes.titulo}
          category={restaurantes.tipo ?? ''}
          description={restaurantes.descricao}
          image={restaurantes.capa}
          rating={restaurantes.avaliacao ?? 0}
          key={restaurantes.id}
          isFeatured={restaurantes.destacado}
          id={restaurantes.id}
        />
      ))}
    </List>
  </div>
)

export default RestaurantsList
