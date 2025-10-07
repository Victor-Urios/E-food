import styled from 'styled-components'
import imagemLogo from '../../assets/images/logo.png'
import backImg from '../../assets/images/ImgFundoHeader.png'

export const Headerbar = styled.header`
  background-image: url(${backImg});
  background-repeat: no-repeat;
  background-size: cover;
`
export const LogoEfood = styled.img.attrs({
  src: imagemLogo,
  alt: 'Logo Efood'
})`
  max-width: 125px;
`

export const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 140px 0 40px 0;
  max-width: 540px;
  text-align: center;
`
