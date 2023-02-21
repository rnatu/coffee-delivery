import { TitleText } from '../../components/Typography';
import { CoffeeFilter } from './components/CoffeeFilter';
import { CoffeeList } from './components/CoffeeList';
import { Intro } from './components/Intro';
import { CoffeeListContainer, CoffeeListHeaderContainer } from './styles';

export function Home() {
  return (
    <>
      <Intro />

      <CoffeeListContainer>
        <CoffeeListHeaderContainer>
          <TitleText color="subtitle" size="l">
            Nossos Cafés
          </TitleText>

          <CoffeeFilter />
        </CoffeeListHeaderContainer>

        <CoffeeList />
      </CoffeeListContainer>
    </>
  );
}
