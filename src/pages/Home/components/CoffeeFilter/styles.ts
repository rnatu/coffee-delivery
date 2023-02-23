import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.colors['brand-yellow']};
  background: none;

  font-size: ${({ theme }) => theme.textSizes['components-tag']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
`;
