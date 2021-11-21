import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Feed from './components/Body/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
