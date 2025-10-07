import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.branco2};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const SocialMedia = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 32px 0 80px 0;
`

export const Disclaimer = styled.p`
  text-align: center;
`
