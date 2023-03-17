import { TitleText, RegularText } from '../../components/Typography';
import { SuccessContainer } from './styles';
import successIllustration from '../../assets/success-illustration.svg';
import { OrderInfo } from './components/OrderInfo';

export function Success() {
  return (
    <SuccessContainer>
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>

      <div>
        <OrderInfo />

        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  );
}
