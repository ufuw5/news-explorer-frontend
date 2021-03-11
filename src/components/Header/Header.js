import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import iconLogoutBlack from '../../images/logout_black.svg';
import iconLogoutWhite from '../../images/logout_white.svg';
import iconMenuBlack from '../../images/menu_black.svg';
import iconMenuWhite from '../../images/menu_white.svg';
import iconCloseMenu from '../../images/close.svg';

function Header({
  theme,
  onAuth,
  hidden,
}) {
  const [menuState, setMenuState] = React.useState({});
  const iconMenu = theme === 'dark' ? iconMenuWhite : iconMenuBlack;

  function handleMenuButton() {
    setMenuState({ ...menuState, isOpen: !menuState.isOpen });
  }

  function handleOnResize() {
    if (document.documentElement.clientWidth <= 603 && menuState.init === false) {
      setMenuState({
        ...menuState,
        isOpen: false,
        init: true,
        iconLogout: iconLogoutWhite,
      });
    } else if (document.documentElement.clientWidth > 603 && menuState.init === true) {
      setMenuState({
        ...menuState,
        isOpen: true,
        init: false,
        iconLogout: theme === 'dark' ? iconLogoutWhite : iconLogoutBlack,
      });
    }
  }

  function handleOnload() {
    if (document.documentElement.clientWidth <= 603) {
      setMenuState({
        ...menuState,
        isOpen: false,
        init: true,
        iconLogout: iconLogoutWhite,
      });
    } else if (document.documentElement.clientWidth > 603) {
      setMenuState({
        ...menuState,
        isOpen: true,
        init: false,
        iconLogout: theme === 'dark' ? iconLogoutWhite : iconLogoutBlack,
      });
    }
  }

  function handleOnAuth() {
    onAuth();
  }

  window.onresize = handleOnResize;

  React.useEffect(handleOnload, []);

  return (
    <header className={`header ${'header_theme-'.concat(theme)} ${hidden && 'header_hidden'}`}>
      <div className={`header__overlay ${menuState.isOpen && 'header__overlay_open-menu'}`}>
        <div className={`header__container ${menuState.isOpen && 'header__container_open-menu'}`}>
          <div className='header__menu'>
            <Link className="header__name" to="/">NewsExplorer</Link>
            {menuState.init && <button className="header__menu-button" onClick={handleMenuButton}>
              <img className='header__menu-icon' src={menuState.isOpen ? iconCloseMenu : iconMenu} />
            </button>}
          </div>
          {menuState.isOpen && <div className="header__nav">
            <Navigation />
            <button className="header__auth" onClick={handleOnAuth}>
              <p>gregreg</p>
              <img src={menuState.iconLogout} />
            </button>
          </div>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string,
  onAuth: PropTypes.func,
  hidden: PropTypes.bool,
};

export default Header;
