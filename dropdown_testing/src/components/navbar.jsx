import { useState } from "react";
import "../styles/navbar.css";
import { CSSTransition } from "react-transition-group";

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

export function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

export function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main'); 

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <DropdownItem leftIcon="👍" rightIcon=">">
        My Profile
      </DropdownItem>

      <DropdownItem leftIcon="👍" rightIcon=">">
        Settings
      </DropdownItem>

      <DropdownItem leftIcon="👍" rightIcon=">">
        Logout
      </DropdownItem>
    </div>
  );
}
