import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  AdvantageContainer,
  IntroBackground,
  IntroContainer,
  IntroTextContainer,
} from './styles';

import introImage from '../../../../assets/intro-imagem.svg';
import { RegularText, TitleText } from '../../../../components/Typography';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { useTheme } from 'styled-components';

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroBackground>
      <IntroContainer>
        <IntroTextContainer>
          <TitleText size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>

          <RegularText as="h3" color="subtitle" size="l">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>

          <AdvantageContainer>
            <InfoWithIcon
              backgroundColor={colors['brand-yellow-dark']}
              icon={ShoppingCart}
            >
              <RegularText>Compra simples e segura</RegularText>
            </InfoWithIcon>

            <InfoWithIcon backgroundColor={colors['base-text']} icon={Package}>
              <RegularText>Embalagem mantém o café intacto</RegularText>
            </InfoWithIcon>

            <InfoWithIcon backgroundColor={colors['brand-yellow']} icon={Timer}>
              <RegularText>Entrega rápida e rastreada</RegularText>
            </InfoWithIcon>

            <InfoWithIcon
              backgroundColor={colors['brand-purple']}
              icon={Coffee}
            >
              <RegularText>O café chega fresquinho até você </RegularText>
            </InfoWithIcon>
          </AdvantageContainer>
        </IntroTextContainer>

        <img src={introImage} alt="" />
      </IntroContainer>
    </IntroBackground>
  );
}
