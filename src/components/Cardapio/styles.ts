import styled from 'styled-components'
import { cores } from '../../styles'

type ButtonGroupProps = {
  marginTop?: string
}

export const BoxProduct = styled.div`
  width: 320px;
  max-height: 338px;
`

export const ImgProduct = styled.div`
  background-color: ${cores.salmao};
  width: 320px;
  position: relative;
  height: 175px;

  img {
    width: 304px;
    height: 167px;
    margin: 8px 8px 0 8px;
    object-fit: cover;
  }
`

export const BoxTag = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  background-color: ${cores.salmao};
  color: ${cores.branco2};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.salmao};
  color: ${cores.branco2};
  border-top: none;
  padding: 8px;
  height: 163px;
`

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  display: flex;
  font-size: 16px;
  font-weight: bold;
`

export const Rating = styled.span`
  display: flex;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const Button = styled.button<ButtonGroupProps>`
  width: 100%;
  background-color: ${cores.branco2};
  color: ${cores.salmao};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  margin-top: ${(props) => props.marginTop || ''};
`
