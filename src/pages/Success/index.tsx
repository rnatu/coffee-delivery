import { TitleText, RegularText } from '../../components/Typography';
import { OrderInfo, SuccessContainer } from './styles';
import successIllustration from '../../assets/success-illustration.svg';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { useTheme } from 'styled-components';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
export function Success() {
  const { colors } = useTheme();

  return (
    <SuccessContainer>
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>

      <div>
        <OrderInfo>
          <InfoWithIcon backgroundColor={colors['brand-purple']} icon={MapPin}>
            <RegularText>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
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
        </OrderInfo>

        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  );
}
