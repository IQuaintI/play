import { Navbar } from "./components/navbar";
import { DropdownMenu } from "./components/navbar";
import { NavItem } from "./components/navbar";
import CrosshairIcon from "./icons/crosshair";

function App() {
  return (
    <Navbar>
      <NavItem icon={<CrosshairIcon />} />
      <NavItem icon="😀" />
      <NavItem icon="😀" />
      <NavItem icon="😀">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
