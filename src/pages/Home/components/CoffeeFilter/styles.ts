import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FilterItem = styled.label`
  input {
    display: none;

    &:checked + span {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }
  }

  span {
    padding: 0.5rem 0.75rem;
    border-radius: 100px;
    border: 1px solid ${(props) => props.theme.colors['brand-yellow']};
    background: none;

    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-weight: 700;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  //Disable Text Selection
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;
