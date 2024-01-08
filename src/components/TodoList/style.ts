import styled from 'styled-components'

export const ContainerList = styled.main`
  padding: 0 1.5rem;
  gap: 1rem;

  @media (min-width: 50em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`

export const TaskInformation = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;

    h6 {
      font-size: 0.75rem;
    }
    p {
      flex-shrink: 1rem;
      background: var(--gray-500);
      border-radius: 0.25rem;
      font-size: 12px;
      margin-left: 8px;
      padding: 2px;
    }
    @media (min-width: 50em) {
      display: flex;
      justify-content: space-between;
    }
  }

  @media (min-width: 50em) {
    gap: 32rem;
  }
`

export const ItemList = styled.ul``
