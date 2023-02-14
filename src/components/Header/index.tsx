import { ShoppingCart, MapPin } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderContainer, HeadNav } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <HeadNav>
        <button type="button">
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>

        <NavLink to="history">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </HeadNav>
    </HeaderContainer>
  );
}
