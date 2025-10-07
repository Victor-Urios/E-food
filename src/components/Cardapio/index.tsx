import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
  onOpenModal: () => void
}

const Cardapio = ({ title, description, image, onOpenModal }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 160) + '...'
    }

    return descricao
  }

  return (
    <S.BoxProduct>
      <S.ImgProduct>
        <img src={image} alt={title} />
      </S.ImgProduct>
      <S.Infos>
        <S.BoxTitle>
          <S.Title>{title}</S.Title>
        </S.BoxTitle>
        <div>
          <S.Description>{getDescricao(description)}</S.Description>
        </div>
        <S.Button onClick={onOpenModal}>Adicionar ao carrinho</S.Button>
      </S.Infos>
    </S.BoxProduct>
  )
}
export default Cardapio
