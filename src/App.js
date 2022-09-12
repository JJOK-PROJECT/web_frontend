import React from "react";
import Main from './page/Main/Main';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/banner' element={<Banner />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
