import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import styled from 'styled-components';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <Search>
          <SearchIcon />
          <input type="text" placeholder="Search for jobs, companies.." />
        </Search>
      </HeaderLeft>

      <HeaderRight>
        {user && (
          <>
            <HeaderOption title={'Home'} Icon={HomeIcon} />
            <HeaderOption title={'My Network'} Icon={SupervisorAccountIcon} />
            <HeaderOption title={'Jobs'} Icon={BusinessCenterIcon} />
            <HeaderOption title={'Messaging'} Icon={SmsIcon} />
            <HeaderOption title={'Notifications'} Icon={NotificationsIcon} />
            <HeaderOption title={'Me'} avatar={true} onClick={logoutOfApp} />
          </>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgrey;
  padding: 10px;
  width: 100%;
  z-index: 999;
`;

const HeaderLeft = styled.div`
  display: flex;
  & > img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;
  & > input {
    outline: none;
    border: none;
    background: none;
  }
`;
export default Header;
