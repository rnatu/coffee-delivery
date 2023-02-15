import { FilterButton, FilterContainer } from './styles';

export function CoffeeFilter() {
  return (
    <>
      <FilterContainer>
        <FilterButton>{'Tradicional'.toUpperCase()}</FilterButton>
        <FilterButton>{'Especial'.toUpperCase()}</FilterButton>
        <FilterButton>{'Com Leite'.toUpperCase()}</FilterButton>
        <FilterButton>{'Alcoólico'.toUpperCase()}</FilterButton>
        <FilterButton>{'Gelado'.toUpperCase()}</FilterButton>
      </FilterContainer>
    </>
  );
}
