import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import {
  AdvantageContainer,
  AdvantageItem,
  IntroBackground,
  IntroContainer,
  IntroTextContainer,
} from './styles';

import introImage from '../../../../assets/intro-imagem.svg';

export function Intro() {
  return (
    <IntroBackground>
      <IntroContainer>
        <IntroTextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>

          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <AdvantageContainer>
            <AdvantageItem backgroundColor="yellow-dark">
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

            <AdvantageItem backgroundColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </AdvantageItem>

            <AdvantageItem backgroundColor="purple">
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
