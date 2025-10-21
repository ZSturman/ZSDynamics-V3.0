import { Link } from 'react-router-dom';
import ContactSVG from "../../assets/svg/ContactSVG";

const SVGLinkContact = () => {
  return (
    <Link to="/contact">
      <ContactSVG />
    </Link>
  );
};

export default SVGLinkContact
