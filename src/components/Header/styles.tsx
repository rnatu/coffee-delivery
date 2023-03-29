import styled from 'styled-components';

export const HeaderNav = styled.header`
  margin: 0 auto;
  max-width: 70rem;
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavActions = styled.nav`
  display: flex;
  gap: 0.75rem;

  button {
    svg {
      color: ${(props) => props.theme.colors['brand-purple']};
    }

    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;

    gap: 0.25rem;
    background-color: ${(props) => props.theme.colors['brand-purple-light']};
    color: ${(props) => props.theme.colors['brand-purple-dark']};

    padding: 0 0.7rem;
  }

  a {
    border: none;
    border-radius: 6px;

    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    color: ${(props) => props.theme.colors['brand-yellow-dark']};

    position: relative;

    div {
      position: absolute;
      top: -8px;
      right: -8.35px;

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 1000px;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
      color: ${({ theme }) => theme.colors.white};

      font-size: 12px;
    }
  }
`;
