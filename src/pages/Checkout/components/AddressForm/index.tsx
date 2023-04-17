import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';
import { Input } from './Input';
import { AddressFormContainer, InputsContainer } from './styles';
import { useFormContext } from 'react-hook-form';

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { colors } = useTheme();
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <SectionTitle
        icon={{ phosphorIcon: MapPinLine, color: colors['brand-yellow-dark'] }}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />

      <InputsContainer>
        <Input
          placeholder="CEP"
          className="cep"
          type="text"
          {...register('cep')}
          error={errors.cep?.message}
        />
        <Input
          placeholder="Rua"
          className="street"
          {...register('street')}
          error={errors.street?.message}
        />
        <Input
          placeholder="Número"
          type="number"
          {...register('number', {
            valueAsNumber: true,
          })}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complemento"
          className="complement"
          rightText="Opicional"
        />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" maxLength={2} />
      </InputsContainer>
    </AddressFormContainer>
  );
}
