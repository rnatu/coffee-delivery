import styled from 'styled-components';

export const IntroBackground = styled.div`
  background-image: url('/src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  padding: 92px 1rem;
  max-width: calc(70rem + 1rem);

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

  h3 {
    margin-top: 1rem;
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
