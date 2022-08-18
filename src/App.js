import react from "react";
import Signup from "./page/Signup/Signup";
import Login from "./page/Login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
