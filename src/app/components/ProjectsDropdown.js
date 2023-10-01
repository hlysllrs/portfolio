import { PROJECT_DATA } from '../data/data'
import NavLink from './NavLink'

export default function ProjectsDropdown({ setProjectsListOpen }) {
    const handleClick = () => setProjectsListOpen(!setProjectsListOpen)

    return (
        <ul
            onClick={handleClick}
            className="absolute flex flex-col p-2 items-start md:top-24 md:right-44 md:z-10 bg-background"
        >
            {PROJECT_DATA.map((project, i) => (
                <li key={i} className="block w-full text-black">
                    <NavLink
                        title={`${project.id} ${project.title}`}
                        href={`/projects/${project.pathId}`}
                    />
                </li>
            ))}
        </ul>
    )
}
