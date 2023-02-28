import { MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../SectionTitle';

export function DeliveryDataForm() {
  const { colors } = useTheme();

  return (
    <div>
      <SectionTitle
        icon={{ phosphorIcon: MapPinLine, color: colors['brand-yellow-dark'] }}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />
    </div>
  );
}
