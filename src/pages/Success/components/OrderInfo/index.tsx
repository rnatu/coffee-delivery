import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { RegularText } from '../../../../components/Typography';
import { OrderInfoContainer } from './styles';

export function OrderInfo() {
  const { colors } = useTheme();

  return (
    <OrderInfoContainer>
      <InfoWithIcon backgroundColor={colors['brand-purple']} icon={MapPin}>
        <RegularText>
          Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos -
          Porto Alegre, RS
        </RegularText>
      </InfoWithIcon>

      <InfoWithIcon backgroundColor={colors['brand-yellow']} icon={Timer}>
        <RegularText>
          Previsão de entrega <strong>20 min - 30 min</strong>
        </RegularText>
      </InfoWithIcon>

      <InfoWithIcon
        backgroundColor={colors['brand-yellow-dark']}
        icon={CurrencyDollar}
      >
        <RegularText>
          Pagamento na entrega <strong>Cartão de Crédito</strong>
        </RegularText>
      </InfoWithIcon>
    </OrderInfoContainer>
  );
}
