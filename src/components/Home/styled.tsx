import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    place-items: center;
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 280px;
  `}
`
