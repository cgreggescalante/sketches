import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/">Home</NavLink>
            <NavLink as={Link} href="/standard">Terrain2D</NavLink>
        </Nav>
    </Navbar>
)

export default Header
