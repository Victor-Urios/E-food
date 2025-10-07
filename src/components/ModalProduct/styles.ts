import styled from 'styled-components'
import { cores } from '../../styles'

import { Button } from '../Cardapio/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branco};
  max-width: 960px;
  position: relative;
  z-index: 1;
  display: flex;
  padding: 32px;

  > img {
    display: block;
    max-width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }
`

export const ModalAbout = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }

  ${Button} {
    max-width: 244px;
  }
`

export const CloseImg = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
