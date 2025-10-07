import backImg from '../../assets/images/ImgFundoHeader.png'

import { BoxHeader, LogoEfood, Headerbar, Title } from './styles'

const Header = () => (
  <Headerbar style={{ backgroundImage: `url(${backImg})` }}>
    <BoxHeader>
      <LogoEfood />
      <Title>Viva experiências gastrônomicas no conforto de sua casa</Title>
    </BoxHeader>
  </Headerbar>
)

export default Header
