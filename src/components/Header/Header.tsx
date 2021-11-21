import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { HeaderOption } from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { logout } from '../../features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search for jobs, companies.." />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title={'Home'} Icon={HomeIcon} />
        <HeaderOption title={'My Network'} Icon={SupervisorAccountIcon} />
        <HeaderOption title={'Jobs'} Icon={BusinessCenterIcon} />
        <HeaderOption title={'Messaging'} Icon={SmsIcon} />
        <HeaderOption title={'Notifications'} Icon={NotificationsIcon} />
        <HeaderOption
          title={'Me'}
          avatar={'Sakil Khan'}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
