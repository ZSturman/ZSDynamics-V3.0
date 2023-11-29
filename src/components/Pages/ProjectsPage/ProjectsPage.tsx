import { useEffect, useState } from 'react';
import ProjectCard from "./ProjectCard";
import { ProjectProp } from "../../../types/projectInterfaces";



const ProjectsPage = () => {
    const [projects, setProjects] = useState<ProjectProp[]>([]);

    const dummyProjects: ProjectProp[] = [
        {
            id: "1",
            title: "Machine Learning Model for Predictive Analysis",
            description: "Developed a machine learning model to predict customer behavior based on historical data.",
            tags: [{ id: "1", name: "Python", topic: "Machine Learning" }, { id: "2", name: "TensorFlow", topic: "Machine Learning" }],
            dateCompleted: "2022-01-01",
            dateUpdated: "2022-01-01",
            onGoing: false,
            link: "https://example.com/project1",
            repo: "https://github.com/user/project1",
            images: [{ id: "1", url: "https://madelinetodd.files.wordpress.com/2018/09/depositphotos_3247683-stock-photo-just-a-big-kid-at.jpg?w=627&h=627", description: "Model architecture" }],
            role: "Lead Data Scientist",
            technologyStack: ["Python", "TensorFlow", "Pandas", "SciKit-Learn"]
        },
        {
            id: "2",
            title: "Full-Stack Web Application Using React and Flask",
            description: "Created a full-stack web application with React for the frontend and Flask for the backend.",
            tags: [{ id: "3", name: "React", topic: "Front-end" }, { id: "4", name: "Flask", topic: "Back-end" }],
            dateCompleted: "2022-02-01",
            dateUpdated: "2022-02-01",
            onGoing: false,
            link: "https://example.com/project2",
            repo: "https://github.com/user/project2",
            images: [{ id: "2", url: "https://d1jyxxz9imt9yb.cloudfront.net/animal/115/meta_image/regular/WR202206_GiraffeTranslocation_012_360559_reduced.jpg", description: "User interface" }],
            role: "Full Stack Developer",
            technologyStack: ["React", "Flask", "JavaScript", "Python"]
        },
        {
            id: "3",
            title: "Data Visualization Dashboard",
            description: "Designed a dashboard for visualizing complex datasets using D3.js.",
            tags: [{ id: "5", name: "D3.js", topic: "Data Visualization" }, { id: "6", name: "React", topic: "Front-end" }],
            dateCompleted: "2022-03-01",
            dateUpdated: "2022-03-01",
            onGoing: true,
            link: "https://example.com/project3",
            repo: "https://github.com/user/project3",
            images: [{ id: "3", url: "https://techcrunch.com/wp-content/uploads/2022/06/Weird-Stock-Photography-Haje-Kamps-websize.jpeg", description: "Dashboard view" }],
            role: "Data Visualization Specialist",
            technologyStack: ["D3.js", "React", "CSS", "JavaScript"]
        }
    ]
    
    

    useEffect(() => {
        if (import.meta.env.VITE_PROJECTSPAGE_TESTING === 'true') {
            setProjects(dummyProjects)
        } else {
          // Fetch or use real data
        }
      }, []);

      console.log(projects)
      console.log(import.meta.env);

    
    const sortedProjects = projects?.sort((a, b) => new Date(a.dateCompleted).getTime() - new Date(b.dateCompleted).getTime())

    return (
        <section>
            {sortedProjects?.length > 0 ? (
                sortedProjects.map((project: ProjectProp) => <ProjectCard key={project.id} project={project} />)
            ) : (
                <p>No projects yet</p>
            )}
        </section>
    )
}

export default ProjectsPage;
