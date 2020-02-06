import React from 'react';
import './Header.css';
import logo from '../../img/cocktail.svg'


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span className="header__text">Coctail DB</span>
        <img src={logo} alt="logo"/>
      </header>
    );
  }
}

export default Header;