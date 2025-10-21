import SVGLinkAbout from "./SVGLinkAbout";
import SVGLinkContact from "./SVGLinkContact";
import SVGLinkProjects from "./SVGLinkProjects";

const SVGLinks = () => {
  return (
    <div className="svg-links-container">
      <SVGLinkAbout />
      <SVGLinkContact />
      <SVGLinkProjects />
    </div>
  );
};

export default SVGLinks;
