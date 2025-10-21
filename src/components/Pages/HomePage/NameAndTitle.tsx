import { Link } from 'react-router-dom';
import { IoStatsChartOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";

const NameAndTitle = () => {
  return (
    <div className="name-and-title">
      <h1 className="full-name">zachary sturman</h1>

      <div className="project-links">
        <Link to="/projects" className="project-link">
          <IoStatsChartOutline />
        </Link>

        <Link to="/projects" className="project-link">
          <MdEngineering />
        </Link>
      </div>


    </div>
  );
};

export default NameAndTitle;
