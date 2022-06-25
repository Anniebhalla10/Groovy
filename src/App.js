import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import Home from "./components/Home";
import HeadProject from "./components/HeadProject";
import Favourites from "./components/Favourites";

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
