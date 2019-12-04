import "./styles.css";

import { Link } from "react-router-dom";
import Logo from "./Logo";
import React from "react";
import cart from "../../assets/svg/cart.svg";
import menu from "../../assets/svg/menu-24px.svg";
import person from "../../assets/svg/person.svg";

const Header = () => {
  return (
    <header>
      <Link to='/' className='a'>
        <Logo />
      </Link>

      <nav className='menu'>
        <Link to='/' className='a'>
          Categoria 1
        </Link>
        <Link to='/' className='a'>
          Categoria 2
        </Link>
        <Link to='/' className='a'>
          Categoria 3
        </Link>
        <Link to='/' className='a'>
          Categoria 4
        </Link>
      </nav>

      <div className='right-menu'>
        <Link to='/' className='icon'>
          <img src={menu} alt='Menu' />
        </Link>
        <Link to='/' className='a'>
          <img src={person} />
          <p>Minha conta</p>
        </Link>
        <Link to='/' className='a'>
          <img src={cart} />
        </Link>
      </div>
    </header>
  );
};
export default Header;
