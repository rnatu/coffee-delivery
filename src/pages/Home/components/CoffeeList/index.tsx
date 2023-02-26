import { Coffee } from '../../../../data/coffees';
import { CoffeeCard } from './CoffeeCard';
import { CoffeeListContainer } from './styles';

interface CoffeeProps {
  coffeeList: Coffee[];
}

export function CoffeeList(coffeeList: CoffeeProps) {
  return (
    <>
      <CoffeeListContainer>
        <CoffeeCard />
      </CoffeeListContainer>
    </>
  );
}
