import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  AdvantageContainer,
  AdvantageItem,
  IntroBackground,
  IntroContainer,
  IntroTextContainer,
} from './styles';

import introImage from '../../../../assets/intro-imagem.svg';
import { RegularText, TitleText } from '../../../../components/Typography';

export function Intro() {
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
            <AdvantageItem backgroundColor="brand-yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </AdvantageItem>

            <AdvantageItem backgroundColor="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </AdvantageItem>

            <AdvantageItem backgroundColor="brand-yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </AdvantageItem>

            <AdvantageItem backgroundColor="brand-purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </AdvantageItem>
          </AdvantageContainer>
        </IntroTextContainer>

        <div className="introImage">
          <img src={introImage} alt="" />
        </div>
      </IntroContainer>
    </IntroBackground>
  );
}
