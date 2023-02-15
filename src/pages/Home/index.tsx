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
          <h1>Nossos Cafés</h1>
          <CoffeeFilter />
        </CoffeeListHeaderContainer>

        <CoffeeList />
      </CoffeeListContainer>
    </>
  );
}
