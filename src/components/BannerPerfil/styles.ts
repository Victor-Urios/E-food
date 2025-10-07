import styled from 'styled-components'

import imgBanner from '../../assets/images/laDolceVitaTrattoriaBanner.png'
import { cores } from '../../styles'

export const Banner = styled.div`
  background-image: url(${imgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`

export const BoxInfos = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 0 32px 0;
  }
`

export const Category = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
`
export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
`
