import styled from 'styled-components';

export const CoffeeListContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 32px 1rem;

  max-width: calc(70rem - 1rem);

  > h1 {
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;
