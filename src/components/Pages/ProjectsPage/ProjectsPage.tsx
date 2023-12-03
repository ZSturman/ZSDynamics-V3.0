import ProjectPageHeader from './ProjectPageHeader';
import ProjectsCards from './ProjectsCards';
import './Projects.scss'



const ProjectsPage = () => {
    
    return (
        <div className='content-page'>
            <ProjectPageHeader />
            <ProjectsCards />
        </div>
    )
}

export default ProjectsPage;
