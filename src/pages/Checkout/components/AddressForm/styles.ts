import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const AddressFormContainer = styled(SectionBaseStyle)`
  margin-top: 0.9375rem;
`;

export const InputsContainer = styled.div`
  margin-top: 2rem;
  border: 1px solid red;
`;

// Input
export const InputWrapper = styled.div``;

export const InputContainer = styled.div``;

export const InputStyled = styled.input`
  flex: 1;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  }
`;
