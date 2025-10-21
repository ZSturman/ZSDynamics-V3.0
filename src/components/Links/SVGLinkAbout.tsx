import { Link } from 'react-router-dom';
import AboutSVG from "../../assets/svg/AboutSVG";

const SVGLinkAbout = () => {
  return (
    <Link to="/about">
      <AboutSVG />
    </Link>
  );
};

export default SVGLinkAbout
