import { TitleText } from '../../components/Typography';
import { coffees } from '../../data/coffees';

import { CoffeeFilter } from './components/CoffeeFilter';
import { CoffeeList } from './components/CoffeeList';
import { Intro } from './components/Intro';
import { CoffeeListContainer, CoffeeListHeaderContainer } from './styles';

export function Home() {
  console.log(typeof coffees[0].id);
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

        <CoffeeList coffeeList={coffees} />
      </CoffeeListContainer>
    </>
  );
}
