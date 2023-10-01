import { PROJECT_DATA } from '../data/projectData'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    return (
        <main className="text-black font-semibold flex flex-col flex-1 m-4 text-base md:text-lg leading-tight md:leading-tight">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {PROJECT_DATA.map((project) => (
                    <ProjectCard
                        key={project.id}
                        imageUrl={project.image}
                        title={project.title}
                        id={project.id}
                        pathId={project.pathId}
                        description={project.description}
                    />
                ))}
            </div>
        </main>
    )
}
