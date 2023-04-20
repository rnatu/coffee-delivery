import { coffees } from '../../../../data/coffees';
import { FilterContainer, FilterItem } from './styles';

interface CoffeeFilterProps {
  activeTag: string;
  onHandleChange: (flag: string) => void;
}

export function CoffeeFilter({ activeTag, onHandleChange }: CoffeeFilterProps) {
  const tags = coffees.reduce((prev: string[], curr) => {
    curr.tags.filter((tag) => {
      if (!prev.includes(tag)) {
        prev.push(tag);
      }
      return null;
    });
    return prev;
  }, []);

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
