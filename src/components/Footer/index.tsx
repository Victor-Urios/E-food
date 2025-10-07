import { LogoEfood } from '../Header/styles'

import { Container, SocialMedia, Disclaimer } from './styles'

import imgInstagram from '../../assets/images/instagram.png'
import imgFacebook from '../../assets/images/Facebook.png'
import imgTwytter from '../../assets/images/Twitter.png'

const Footer = () => (
  <Container>
    <LogoEfood />
    <SocialMedia>
      <a href="">
        <img src={imgInstagram} alt="" />
      </a>
      <a href="">
        <img src={imgFacebook} alt="" />
      </a>
      <a href="">
        <img src={imgTwytter} alt="" />
      </a>
    </SocialMedia>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </Container>
)

export default Footer
