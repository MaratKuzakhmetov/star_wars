import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import CharactersPage from './components/CharactersPage/CharactersPage';

function App() {
  const path = useLocation();
  return (
    <div className="App">
      {(path.pathname === '/' || path.pathname === '/characters') && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={(
            <MainPage />
          )}
        />
        <Route
          path="/characters"
          element={(
            <CharactersPage />
          )}
        />
        <Route
          path={(path.pathname !== '/' && path.pathname !== '/characters') && '*'}
          element={(
            <ErrorPage />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
