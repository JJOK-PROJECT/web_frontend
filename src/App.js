import React from "react";
import Main from './page/Main/Main';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from "./page/Signup/Signup";
import Lunch from "./page/Lunch/Lunch";
import Advice from "./page/Community/Advice/Advice";
import Normal from "./page/Community/Normal/Normal";
import Anonym from "./page/Community/Anonym/Anonym";
import Feed from "./page/Feed/Feed";
import Roadview from "./page/Roadview/Roadview";
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/welbato/lunch' element={<Lunch/>}/>
          <Route path='/welbato/anonymous' element={<Anonym/>}/>
          <Route path='/welbato/hotadvice' element={<Advice/>}/>
          <Route path='/welbato/community' element={<Normal/>}/>
          <Route path='/welbato/feed' element={<Feed/>}/>
          <Route path='/welbato/roadview' element={<Roadview/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
