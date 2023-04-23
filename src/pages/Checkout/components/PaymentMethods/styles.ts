import styled from 'styled-components';
import { SectionBaseStyle } from '../../styles';

export const PaymentMethodsContainer = styled(SectionBaseStyle)`
  margin-top: 0.75rem;

  border-radius: 6px;
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
    cursor: default;

    background: ${({ theme }) => theme.colors['brand-purple-light']};

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple-light']};
    }
  }

  label {
    width: 100%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    gap: 0.75rem;

    padding: 1rem 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors['base-button']};

    font-size: ${({ theme }) => theme.textSizes['components-button-s']};

    &:hover {
      background: ${({ theme }) => theme.colors['base-hover']};
    }
  }

  //Disable Text Selection
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
