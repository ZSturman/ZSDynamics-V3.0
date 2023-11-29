import { ProjectCardProps } from "../../../types/projectInterfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
                {project.tags.map(tag => (
                    <span key={tag.id} className="project-tag">{tag.name}</span>
                ))}
            </div>
            <p className="project-date">Completed: {project.dateCompleted}</p>
            {project.onGoing && <p className="project-status">Status: Ongoing</p>}
            {project.link && <a href={project.link} className="project-link">View Project</a>}
            {project.repo && <a href={project.repo} className="project-repo">Repository</a>}
            <div className="project-images">
                {project.images.map(image => (
                    <img key={image.id} src={image.url} alt={image.description || 'Project Image'} className="project-image" />
                ))}
            </div>
            <p className="project-role">Role: {project.role}</p>
            <div className="project-technology-stack">
                {project.technologyStack.map((tech, index) => (
                    <span key={index} className="technology">{tech}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard;
