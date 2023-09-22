import { PROJECT_DATA } from '../data/data'
import NavLink from '../components/NavLink'

export default function Projects() {
    return (
        <div className="mt-24 text-4xl sm:text-5xl md:text-6xl lg:7xl md:pt-4">
            <ul>
                {PROJECT_DATA.map((project, i) => (
                    <li
                        key={i}
                        className="group sm:flex w-full items-end justify-between text-black border-b-2 border-transparent pb-2 md:pb-4 hover:border-[#4bbd04] mb-4"
                    >
                        <NavLink
                            title={`${project.id} ${project.title}`}
                            href={`/projects/${project.pathId}`}
                            className="group-hover:text-[#4bbd04]"
                        />
                        <span className="hidden group-hover:flex text-xs pb-3 sm:pb-2 sm:text-sm md:text-base lg:text-lg">
                            {project.description}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
