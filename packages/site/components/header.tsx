import Link from "next/link";
import { Nav, NavLink, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar>
    <Nav>
      <NavLink as={Link} href="/">
        Home
      </NavLink>
      <NavLink as={Link} href="/Terrain2D/standard">
        Terrain2D
      </NavLink>
    </Nav>
  </Navbar>
);

export default Header;
