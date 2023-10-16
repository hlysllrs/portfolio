import { useState } from 'react'
import NavLink from './NavLink'
import ProjectsDropdown from './ProjectsDropdown'

export default function MenuOverlay({ links, toggleNavMenu }) {
    const [showProjects, setShowProjects] = useState(false)

    return (
        <ul className="flex flex-col py-4 items-center bg-background opacity-90 md:hidden">
            {/* <li
                className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-accent hover:cursor-pointer"
                onClick={() => setShowProjects(!showProjects)}
            >
                Projects
                {showProjects && (
                    <div>
                        <ul>
                            <ProjectsDropdown />
                        </ul>
                    </div>
                )}
            </li> */}

            {links.map((link, i) => (
                <li key={i}>
                    <NavLink
                        onClick={() => toggleNavMenu(false)}
                        title={link.title}
                        href={link.path}
                    />
                </li>
            ))}
        </ul>
    )
}
