import { useState } from 'react';
import { TitleText } from '../../components/Typography';
import { coffees } from '../../data/coffees';

import { CoffeeFilter } from './components/CoffeeFilter';
import { CoffeeList } from './components/CoffeeList';
import { Intro } from './components/Intro';
import { CoffeeListContainer, CoffeeListHeaderContainer } from './styles';

export function Home() {
  const [activeTag, setActiveTag] = useState('');

  function handleChange(tag: string) {
    setActiveTag((prevTag) => (prevTag === tag ? '' : tag));
  }

  function filterCoffeeByTag(tag: string) {
    return coffees.filter((coffee) => coffee.tags.includes(tag));
  }

  const coffeeList = activeTag ? filterCoffeeByTag(activeTag) : coffees;

  return (
    <>
      <Intro />

      <CoffeeListContainer>
        <CoffeeListHeaderContainer>
          <TitleText color="subtitle" size="l">
            Nossos Cafés
          </TitleText>

          <CoffeeFilter activeTag={activeTag} onHandleChange={handleChange} />
        </CoffeeListHeaderContainer>

        <CoffeeList coffeeList={coffeeList} />
      </CoffeeListContainer>
    </>
  );
}
