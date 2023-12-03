import { Link } from 'react-router-dom';
import { FaTwitter, FaXTwitter, FaRegEnvelope } from 'react-icons/fa6';
import { PiGithubLogoBold, PiPhoneCallBold } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi"
import { SiAboutdotme } from "react-icons/si"
import { CgHome } from "react-icons/cg"
import { RiSendPlane2Line } from "react-icons/ri"
import { MdWorkOutline } from "react-icons/md"
import { PiToiletPaperBold } from "react-icons/pi";


type SidebarLinkProps = {
    label: string,
    to: string
}

const iconMap: { [key: string]: JSX.Element } = {
    "GitHub": <PiGithubLogoBold/>,
    "LinkedIn": <FiLinkedin/>,
    "Twitter": <FaTwitter/>,
    "TwitterX": <FaXTwitter/>,
    "Email": <FaRegEnvelope/>,
    "Phone": <PiPhoneCallBold/>,
    "About": <SiAboutdotme/>,
    "Home": <CgHome/>,
    "Contact": <RiSendPlane2Line/>,
    "Projects": <MdWorkOutline/>,
    "Resume": <PiToiletPaperBold/>
}

const SidebarLink = ({ label, to }: SidebarLinkProps) => {
    const icon = iconMap[label] || null;

    return (
        <Link 
            to={to} 
            aria-label={label} 
            title={label}>
            <li className="icon">{icon}</li>
        </Link>
    );
}
  
export default SidebarLink
