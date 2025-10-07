import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 64px 0;
  font-size: 18px;
  font-weight: bold;

  span {
    justify-self: end;
    cursor: pointer;
  }
`

export const TitleLink = styled.h3`
  justify-self: start;
  text-decoration: none;
  color: ${cores.salmao};
`
