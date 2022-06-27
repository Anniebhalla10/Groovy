import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import HeadProject from "./components/UI/HeadProject";
import Favourites from "./components/Pages/Favourites";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              {" "}
              <HeadProject /> <Home />
            </>
          }
        />
        <Route
          path="/home/favourites"
          element={
            <>
              {" "}
              <HeadProject /> <Favourites />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
