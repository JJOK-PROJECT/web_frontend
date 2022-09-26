import React from "react";
import Main from './page/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Schoolsch from './page/Schoolschdule/Schoolschdule';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/welbato/schoolschedule' element={<Schoolsch/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
