import styled from 'styled-components';

export const IntroBackground = styled.div`
  background-image: url('/src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  padding: 92px 1rem;
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
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme.colors['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`;

export const AdvantageContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem 2.5rem;
`;

interface BackgroundColor {
  backgroundColor: 'yellow-dark' | 'base-text' | 'yellow' | 'purple';
}

export const AdvantageItem = styled.p<BackgroundColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    color: ${(props) => props.theme.colors.background};

    padding: 0.5rem;
    width: fit-content;

    background: ${(props) => props.theme.colors[props.backgroundColor]};
    border-radius: 999px;
  }
`;