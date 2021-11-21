import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Feed from './components/Body/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase/config';
import Widgets from './components/Body/Widgets/Widgets';
import styled from 'styled-components';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth?.email,
            uid: userAuth?.uid,
            displayName: userAuth?.displayName,
            profileUrl: userAuth?.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Main>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <AppBody>
          <Sidebar />
          <Feed />
          <Widgets />
        </AppBody>
      )}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3f2ef;
`;

const AppBody = styled.div`
  display: flex;
  width: 90%;
  margin-top: 35px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default App;
