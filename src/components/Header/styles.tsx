import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 2rem 0;

  padding: 0 1rem;
  max-width: calc(51.25rem - 1rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeadNav = styled.nav`
  display: flex;
  gap: 0.75rem;

  button {
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;

    gap: 0.25rem;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    padding: 0 0.7rem;
  }

  a {
    border: none;
    border-radius: 6px;

    padding: 0.5rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`;
