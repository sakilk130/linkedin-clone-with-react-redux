import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Body/Sidebar/Sidebar';
import Feed from './components/Body/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
