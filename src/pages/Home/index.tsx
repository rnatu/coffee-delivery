import { IntroBackground, IntroContainer, IntroTextContainer } from './styles';
import introImage from '../../assets/intro-imagem.svg';

export function Home() {
  return (
    <>
      <IntroBackground>
        <IntroContainer>
          <IntroTextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>

            <p className="item1">Compra simples e segura</p>
            <p className="item2">Embalagem mantém o café intacto</p>
            <p className="item3">Entrega rápida e rastreada</p>
            <p className="item4">O café chega fresquinho até você</p>
          </IntroTextContainer>

          <div className="introImage">
            <img src={introImage} alt="" />
          </div>
        </IntroContainer>
      </IntroBackground>

      <div>Coffe list</div>
    </>
  );
}
