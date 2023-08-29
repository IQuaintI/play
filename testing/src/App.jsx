import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { WeaponsMenu } from "./components/WeaponsMenu";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <WeaponsMenu />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
