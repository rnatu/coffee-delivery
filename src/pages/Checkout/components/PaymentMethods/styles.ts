import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const PaymentMethodsContainer = styled(SectionBaseStyle)`
  margin-top: 0.75rem;
`;

export const PaymentMethodOptions = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
`;

// PaymentMethodInput
export const PaymentInputContainer = styled.div`
  display: flex;
  width: 100%;

  input {
    display: none;
  }

  input:checked + label {
    background-color: red;
  }

  label {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    gap: 0.75rem;

    padding: 1rem 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors['base-button']};

    font-size: ${({ theme }) => theme.textSizes['components-button-s']};
  }
`;
