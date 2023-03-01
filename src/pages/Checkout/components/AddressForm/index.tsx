import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { Input } from './Input';
import { AddressFormContainer, InputsContainer } from './styles';

export function AddressForm() {
  const { colors } = useTheme();

  return (
    <AddressFormContainer>
      <SectionTitle
        icon={{ phosphorIcon: MapPinLine, color: colors['brand-yellow-dark'] }}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />

      <InputsContainer>
        <Input placeholder={'CEP'} />
        <Input placeholder={'Rua'} />
        <Input placeholder={'Número'} type="number" />
        <Input placeholder={'Complemento'} />
        <Input placeholder={'Bairro'} />
        <Input placeholder={'Cidade '} />
        <Input placeholder={'UF '} maxLength={2} />
      </InputsContainer>
    </AddressFormContainer>
  );
}
