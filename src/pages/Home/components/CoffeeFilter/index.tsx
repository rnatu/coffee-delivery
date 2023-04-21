import { coffees } from '../../../../data/coffees';
import { FilterContainer, FilterItem } from './styles';

interface CoffeeFilterProps {
  activeTag: string;
  onHandleChange: (flag: string) => void;
}

export function CoffeeFilter({ activeTag, onHandleChange }: CoffeeFilterProps) {
  const tags = [...new Set(coffees.flatMap((coffee) => coffee.tags))];

  return (
    <>
      <FilterContainer>
        {tags.map((tag) => (
          <FilterItem htmlFor={tag} key={tag}>
            <input
              type="checkbox"
              id={tag}
              value={tag}
              onChange={() => onHandleChange(tag)}
              checked={activeTag === tag}
            />
            <span>{tag.toUpperCase()}</span>
          </FilterItem>
        ))}
      </FilterContainer>
    </>
  );
}
