import { ShoppingCart, MapPin } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useCartContext } from '../../hooks/useCartContext';
import { HeaderNav, NavActions } from './styles';

export function Header() {
  const { cartState } = useCartContext();

  return (
    <HeaderNav>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <NavActions>
        <button type="button">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>

        <NavLink to="checkout">
          <ShoppingCart size={22} weight="fill" />
          {cartState.coffees.length > 0 && (
            <div>
              <span>{cartState.coffees.length}</span>
            </div>
          )}
        </NavLink>
      </NavActions>
    </HeaderNav>
  );
}
