import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaInfoCircle } from 'react-icons/fa';

type SocialMediaLinkProps = {
    label: string;
    to: string;
};

const iconMap: { [key: string]: JSX.Element } = {
    "GitHub": <FaGithub className="social-icon"/>,
    "LinkedIn": <FaLinkedin className="social-icon"/>,
    "Twitter": <FaTwitter className="social-icon"/>,
    "Email": <FaEnvelope className="social-icon"/>,
    "Phone": <FaPhone className="social-icon"/>,
    "Contact Page": <FaInfoCircle className="social-icon"/>
};

const SocialMediaLink = ({ label, to }: SocialMediaLinkProps) => {
    const icon = iconMap[label] || null;

    return (
        <Link 
            to={to} 
            className="social-media-link"
            aria-label={label} 
            title={label}>
            {icon}
        </Link>
    );
}
  
export default SocialMediaLink;
