import { useLocation } from 'react-router-dom'
import NavItem from './NavItem'
import Brand from './Brand'

const NavMenu = () => {
    const location = useLocation();
    
    return (
        <nav>
            <Brand />
            <ul className='navbar-menu'>
                <li>
                    <NavItem label="Home" to="/" active={location.pathname === "/"} />
                </li>
                <li>
                    <NavItem label="About" to="/about" active={location.pathname === "/about"} />
                </li>
                <li>
                    <NavItem label="Projects" to="/projects" active={location.pathname === "/projects"} />
                </li>
                <li>
                    <NavItem label="Contact" to="/contact" active={location.pathname === "/contact"} />
                </li>
                <li>
                    <a href="src/assets/documents/ZacharySturman_Resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu