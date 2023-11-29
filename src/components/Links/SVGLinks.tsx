import AboutSVG from "../../assets/svg/AboutSVG";
import ContactSVG from "../../assets/svg/ContactSVG";
import ProjectsSVG from "../../assets/svg/ProjectsSVG";

const SVGLinks = () => {
  return (
    <div className="svg-links-container">
    <a href="/about">
      <AboutSVG />
    </a>

    <a href="/contact">
      <ContactSVG />
    </a>

    <a href="/projects">
      <ProjectsSVG />
    </a>

    </div>
  );
};

export default SVGLinks;
