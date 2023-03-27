import { TitleText } from '../../components/Typography';
import { coffees } from '../../data/coffees';
import { useCartContext } from '../../hooks/useCartContext';

import { CoffeeFilter } from './components/CoffeeFilter';
import { CoffeeList } from './components/CoffeeList';
import { Intro } from './components/Intro';
import { CoffeeListContainer, CoffeeListHeaderContainer } from './styles';

export function Home() {
  const { test } = useCartContext();
  console.log(test);

  const coffeeList = coffees;

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

        <CoffeeList coffeeList={coffeeList} />
      </CoffeeListContainer>
    </>
  );
}
