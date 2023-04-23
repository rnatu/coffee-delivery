import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const AddressFormContainer = styled(SectionBaseStyle)`
  margin-top: 0.9375rem;

  border-radius: 6px;
`;

export const InputsContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

// input
export const InputStyledContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  border-radius: 4px;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  > p {
    font-style: italic;
    color: ${({ theme }) => theme.colors['base-label']};
    margin-left: 0.625rem;
  }
`;

export const InputStyled = styled.input`
  width: 100%;

  background-color: ${({ theme }) => theme.colors['base-input']};
  border: none;

  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
