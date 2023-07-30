import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Link } from "react-router-dom";
import { WeaponsMenu } from "./components/WeaponsMenu";
import { M249_Saw } from "./board/M249_Saw";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/WeaponsMenu">Weapons</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/WeaponsMenu" element={<WeaponsMenu />} />
        <Route path="/M249_Saw" element={<M249_Saw />} />
      </Routes>
    </>
  );
}

export default App;
