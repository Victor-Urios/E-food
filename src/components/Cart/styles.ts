import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'

type InputGroupProps = {
  maxWidth?: string
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  font-weight: bold;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  .margin-top {
    margin-top: 24px;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.branco2};
    text-align: center;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.branco2};
  padding: 8px;
  display: flex;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const Prices = styled.p`
  color: ${cores.branco};
  display: flex;
  justify-content: space-between;
  padding: 40px 0 16px 0;
`

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${cores.branco2};
  font-size: 14px;

  input {
    background-color: ${cores.branco2};
    height: 31px;
    border: 1px solid ${cores.branco2};
    margin: 8px 0;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #4b4b4b;
  }

  > div {
    display: flex;
    gap: 32px;
  }

  .error {
    border: 1px dashed #ff0000ff;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  width: ${(props) => props.maxWidth || 'auto'};

  input {
    width: 100%;
  }
`
