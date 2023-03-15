import styled from 'styled-components';

interface BackgroundColor {
  backgroundColor: string;
}

export const InfoWithIconContainer = styled.div<BackgroundColor>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    color: ${(props) => props.theme.colors.background};

    padding: 0.5rem;
    width: fit-content;

    background: ${(props) => props.backgroundColor};
    border-radius: 999px;
  }
`;
