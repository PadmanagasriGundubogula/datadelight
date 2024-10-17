import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckBox from './components/checkbox';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignPage from './components/SignPage';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/check" element={<CheckBox />} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Sign" element={<SignPage/>}/>
        <Route path="/mainpage" element={<MainPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
