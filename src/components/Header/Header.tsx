import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { HeaderOption } from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title={'Home'} Icon={HomeIcon} />
        <HeaderOption title={'My Network'} />
        <HeaderOption title={'Home'} />
      </div>
    </div>
  );
}

export default Header;
