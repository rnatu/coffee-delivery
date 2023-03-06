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

  .address {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const InputStyled = styled.input`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }
`;
