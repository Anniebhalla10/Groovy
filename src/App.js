import { Route, Routes, useNavigate} from "react-router-dom";
import './App.scss';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Home from "./components/Home";

function App() {

  return (
  <>
  <Routes> 
  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home />} />
  </Routes> 
  </>
  );
}

export default App;
