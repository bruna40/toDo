import styled from 'styled-components'

export const ContainerInput = styled.input`
  appearance: none;

  width: 1.25rem;
  height: 1.25rem;

  border: 2px solid var(--blue);
  border-radius: 50%;

  outline: none;
  cursor: pointer;

  &:checked {
    background-color: var(--purple-dark);
  }
`

export const ContainerItem = styled.li`
  position: relative;
  background: var(--gray-500);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 25rem;
  height: 4rem;
  margin-top: 1.5rem;
  border-radius: 0.25rem;
  padding: 1rem;

  button {
    background: transparent;
    color: var(--gray-300);
    border: 0;
    cursor: pointer;
    transition: filter 0.2s;
    border-radius: 0.25rem;
    &:hover {
      filter: brightness(0.7);
    }
  }
  p {
    font-size: 1rem;
    width: 100%;
    text-align: left;
    color: var(--white);
    margin-left: 16px;
    overflow: auto;
    font-weight: bold;
  }

  &:hover {
    filter: brightness(0.8);
  }

  @media (min-width: 50em) {
  }
`
