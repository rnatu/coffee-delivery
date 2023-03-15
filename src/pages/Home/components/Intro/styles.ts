import styled from 'styled-components';

export const IntroBackground = styled.div`
  background-image: url('/src/assets/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IntroContainer = styled.div`
  margin: 0 auto;
  padding: 5.75rem 0;
  max-width: 1120px;

  display: flex;
  gap: 3.5rem;
`;

export const IntroTextContainer = styled.div`
  flex: 1;

  h3 {
    margin-top: 1rem;
  }
`;

export const AdvantageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4.125rem;
  row-gap: 1.25rem;
`;
