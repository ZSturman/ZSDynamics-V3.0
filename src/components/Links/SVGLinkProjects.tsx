import { Link } from 'react-router-dom';
import ProjectsSVG from "../../assets/svg/ProjectsSVG";

const SVGLinkProjects = () => {
  return (
    <div>
      <Link to="/projects">
        <ProjectsSVG />
      </Link>
    </div>
  );
};

export default SVGLinkProjects;
