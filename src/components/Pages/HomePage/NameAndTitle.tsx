import { IoStatsChartOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";

const NameAndTitle = () => {
  return (
    <div className="name-and-title">
      <h1 className="full-name">zachary sturman</h1>

      <div className="project-links">
      <a href="./projects" className="project-link">
          <IoStatsChartOutline />
        </a>

      <a href="./projects" className="project-link">
        <MdEngineering />
      </a>
      </div>


    </div>
  );
};

export default NameAndTitle;
