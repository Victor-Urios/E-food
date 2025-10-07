import styled from 'styled-components'
import { cores } from '../../styles'

export const BoxProduct = styled.div`
  width: 472px;
  max-height: 398px;
`

export const ImgProduct = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 217px;

  img {
    width: 100%;
    max-height: 100%;
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
  background-color: ${cores.branco};
  border: 1px solid ${cores.salmao};
  color: ${cores.salmao};
  border-top: none;
  padding: 8px;
  height: auto;
`

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  display: flex;
  font-size: 18px;
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
  margin: 16px 0;
`

export const Button = styled.button`
  width: 82px;
  background-color: ${cores.salmao};
  color: ${cores.branco};
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 4px 6px;
`
