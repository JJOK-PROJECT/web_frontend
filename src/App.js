import React from "react";
import Main from './page/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
