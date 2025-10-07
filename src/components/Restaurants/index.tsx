import { Link } from 'react-router-dom'
import imageEstrela from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  title: string
  category: string
  description: string
  rating: number
  image: string
  isFeatured?: boolean
  id: number
}

const Restaurants = ({
  title,
  category,
  description,
  rating,
  image,
  isFeatured,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 246) + '...'
    }

    return descricao
  }
  return (
    <S.BoxProduct>
      <S.ImgProduct>
        <img src={image} alt={title} />
        <S.BoxTag>
          {isFeatured && <S.Tag>Destaque da semana</S.Tag>}
          {category && <S.Tag>{category}</S.Tag>}
        </S.BoxTag>
      </S.ImgProduct>
      <S.Infos>
        <S.BoxTitle>
          <S.Title>{title}</S.Title>
          <S.Rating>
            {rating} <img src={imageEstrela} alt="avaliação" />
          </S.Rating>
        </S.BoxTitle>
        <div>
          <S.Description>{getDescricao(description)}</S.Description>
        </div>
        <S.Button as={Link} to={`/perfil/${id}`}>
          Saiba mais
        </S.Button>
      </S.Infos>
    </S.BoxProduct>
  )
}

export default Restaurants
