import GamblersFallacyImg from "./images/gamblers_fallacy.png"
import KnifeGrinderImg from "./images/knife_grinder_business.png"
import LACrimeDataImg from "./images/la_crime_data.png"
import KnowledgeNavigatorImg from "./images/learn_something.png"
import PeriodicTableImg from "./images/periodic_table.png"
import TipRedistributionAnalysisImg from "./images/tip_redistribution.png"
/* import DefaultImage from "./images/default_image.png"; */
import { ProjectCardProps } from "../../../types/projectInterfaces";


const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {

  const imageMap: { [key: string]: string } = {
    GamblersFallacy: GamblersFallacyImg,
    KnifeGrinder: KnifeGrinderImg,
    LACrimeData: LACrimeDataImg,
    KnowledgeNavigator: KnowledgeNavigatorImg,
    PeriodicTable: PeriodicTableImg,
    TipRedistributionAnalysis: TipRedistributionAnalysisImg,
  };

  const projectImage = imageMap[project.imageSrc] || GamblersFallacyImg;
  
  return (
    <div className="project-card">
      <div>
        <img src={projectImage} alt={project.imageAlt} />
      </div>
      <div className="project-content">
        <p className="pre-title">{project.preTitle}</p>
        <h4 className="project-title">{project.title}</h4>
        <p className="project-description">
          {project.descriptionShort}
        </p>

        <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag.id} className="project-tag">
            {tag.name}
          </span>
        ))}
      </div>
      </div>
        <div className="project-footer">
          <p className="project-date">Completed: {project.dateCompleted}</p>
          <p className="project-status">Updated: {project.dateUpdated}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
