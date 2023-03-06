import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  margin: 0 auto;
  margin-top: 2.5rem;
  max-width: 70rem;

  display: flex;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.section`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
`;

export const UserDataContainer = styled.div`
  flex: 1;
`;

export const SelectedCoffees = styled.div`
  width: 100%;
`;
