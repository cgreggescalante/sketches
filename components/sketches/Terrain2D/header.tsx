import {Nav, Navbar, NavLink} from "react-bootstrap";
import Link from "next/link";

const Header = () => (
    <Navbar>
        <Nav>
            <NavLink as={Link} href="/Terrain2D/standard">Standard</NavLink>
            <NavLink as={Link} href="/Terrain2D/island">Island</NavLink>
            <NavLink as={Link} href="/Terrain2D/archipelago">Archipelago</NavLink>
        </Nav>
    </Navbar>
)

export default Header
