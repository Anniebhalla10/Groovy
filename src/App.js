import { Route, Routes, useNavigate} from "react-router-dom";
import './App.scss';
import { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  // const [ isLoggedIn, setIsLoggedIn]= useState(false);
  // const navigate= useNavigate();

  // const checkLogin=()=>{
  //   if(!isLoggedIn){
  //     navigate('./login', {replace: true});
  //   }
  // }

  // useEffect(()=>{
  //   checkLogin();
  // },[]);

  return (
  <>
  {/* <Routes> */}
      {/* <Route path="/" element={}/> */}
       {/* <Route path='./login' element={<Login/>}/>
  </Routes>  */}
  <Login/>

  </>
  );
}

export default App;
