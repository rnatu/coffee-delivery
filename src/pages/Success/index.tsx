import { TitleText, RegularText } from '../../components/Typography';
import { SuccessContainer } from './styles';

export function Success() {
  return (
    <SuccessContainer>
      <TitleText size="l">Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </RegularText>
      <div></div>
    </SuccessContainer>
  );
}
