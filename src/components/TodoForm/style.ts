import styled from 'styled-components'

export const ContainerForm = styled.form`
  transform: translateY(-2rem);

  display: flex;
  justify-content: center;
  gap: 0.5rem;

  input {
    min-width: 16rem;
    height: 3.4rem;
    background: var(--gray-500);
    border-radius: 0.5rem;
    border: 0;
    color: var(--white);

    padding: 0 1rem;

    &:hover {
      &::placeholder {
        color: var(--white);
      }
    }

    @media (min-width: 50em) {
      min-width: 40rem;
    }
  }

  button {
    width: 5.7rem;
    border-radius: 0.5rem;
    border: 0;
    background: var(--blue-dark);
    color: var(--white);
    font-weight: bold;
    transition: filter 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;

    &:hover {
      background: var(--blue);
    }
  }
`
