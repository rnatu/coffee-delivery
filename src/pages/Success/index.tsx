import { TitleText, RegularText } from '../../components/Typography';
import { OrderInfo, SuccessContainer } from './styles';
import successIllustration from '../../assets/success-illustration.svg';

export function Success() {
  return (
    <SuccessContainer>
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>

      <div>
        <OrderInfo>
          <h1>Order</h1>
          <h1>Order</h1>
          <h1>Order</h1>
          <h1>Order</h1>
          <h1>Order</h1>
        </OrderInfo>

        <img src={successIllustration} alt="" />
      </div>
    </SuccessContainer>
  );
}
