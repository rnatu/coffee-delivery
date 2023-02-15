import styled from 'styled-components';

export const HeaderNav = styled.header`
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavActions = styled.nav`
  display: flex;
  gap: 0.75rem;

  button {
    svg {
      color: ${(props) => props.theme.colors.purple};
    }

    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;

    gap: 0.25rem;
    background-color: ${(props) => props.theme.colors['purple-light']};
    color: ${(props) => props.theme.colors['purple-dark']};

    padding: 0 0.7rem;
  }

  a {
    border: none;
    border-radius: 6px;

    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors['yellow-light']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`;
