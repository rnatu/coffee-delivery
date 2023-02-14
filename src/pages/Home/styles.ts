import styled from 'styled-components';

export const IntroBackground = styled.div`
  background-image: url('/src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;

  padding: 92px 1rem;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 70rem;

  display: flex;
  grid-gap: 3.5rem;

  .introImage {
    display: flex;

    img {
      width: 100%;
    }
  }
`;

export const IntroTextContainer = styled.div`
  flex: 1;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;
