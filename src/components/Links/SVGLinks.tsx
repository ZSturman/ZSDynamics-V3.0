import SVGLinkAbout from "./SVGLinkAbout";
import SVGLinkContact from "./SVGLinkContact";
import SVGLinkProjects from "./SVGLinkProjects";

const SVGLinks = () => {
  return (
    <div className="svg-links-container">
    <a href="/about">
      <SVGLinkAbout />
    </a>

    <a href="/contact">
      <SVGLinkContact />
    </a>

    <a href="/projects">
      <SVGLinkProjects />
    </a>

    </div>
  );
};

export default SVGLinks;
