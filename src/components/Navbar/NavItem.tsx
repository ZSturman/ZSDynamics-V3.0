// NavItem.tsx

import { Link } from 'react-router-dom';

type NavItemProps = {
    label: string;
    to: string;
    active?: boolean;
}

const NavItem = ({ label, to, active }: NavItemProps) => {
    return (
        <Link 
            to={to} 
            className={`nav-link${active ? '-active' : ''}`}>
                {label}
        </Link>
    )
}
  
export default NavItem;
