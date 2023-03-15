import { TitleText, RegularText } from '../../components/Typography';
import { OrderInfo, SuccessContainer } from './styles';
import successIllustration from '../../assets/success-illustration.svg';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { useTheme } from 'styled-components';
import { MapPin } from 'phosphor-react';
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
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
            </p>
          </InfoWithIcon>
        </OrderInfo>

        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  );
}
