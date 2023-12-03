import { PiToiletPaperBold } from "react-icons/pi";


type SidebarLinkProps = {
    label: string,
    to: string
}

const SidebarReumeLink = ({ label, to }: SidebarLinkProps) => {

    return (
        <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={label} 
        title={label}>
        <li className="icon"><PiToiletPaperBold/></li>
    </a>
    );
}
  
export default SidebarReumeLink
