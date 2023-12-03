import { useEffect, useState } from 'react';
import ProjectCard from "./ProjectCard";
import { ProjectProp } from "../../../types/projectInterfaces";
import projectsData from './projectsData.json'
import './Projects.scss'



const ProjectsCards = () => {
    const [projects, setProjects] = useState<ProjectProp[]>([]);

    useEffect(() => {
        setProjects(projectsData)
      }, []);

    
    const sortedProjects = projects?.sort((b, a) => new Date(a.dateCompleted).getTime() - new Date(b.dateCompleted).getTime())

    return (
        <div className='project-cards'>
            {sortedProjects?.length > 0 ? (
                sortedProjects.map((project: ProjectProp) => <ProjectCard key={project.id} project={project} />)
            ) : (
                <p>There seems to have been a small error with loading the projects</p>
            )}
        </div>
    )
}

export default ProjectsCards
