'use client'
import Link from 'next/link'
import NavAnimation from './NavAnimation'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import ProjectsDropdown from './ProjectsDropdown'

export default function NavBar() {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    const [projectsListOpen, setProjectsListOpen] = useState(false)

    const navLinks = [
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
    ]
    return (
        <nav className="fixed top-0 left-0 z-5 bg-background bg-opacity-100 w-screen font-semibold">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="md:col-span-7 text-lg sm:text-lg md:text-2xl text-black hover:text-accent transition-colors  md:leading-none"
                >
                    Hailey Sellars is a <NavAnimation />
                    <br />
                    based in New York City.
                </Link>
                {/* Mobile Menu for small screens */}
                <div className="mobile-menu fixed right-4 block md:hidden">
                    {navMenuOpen ? (
                        <button
                            onClick={() => setNavMenuOpen(false)}
                            className="flex text-black items-center px-1 py-1 border rounded border-black hover:text-accent hover:border-accent"
                        >
                            <XMarkIcon className="h-5 w-5 " />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavMenuOpen(true)}
                            className="flex text-black items-center px-1 py-1 border rounded border-black hover:text-accent hover:border-accent"
                        >
                            <Bars3Icon className="h-5 w-5 " />
                        </button>
                    )}
                </div>
                {/* Nav Menu for larger screens */}
                <div
                    className="menu hidden md:block md:w-full md:col-start-10 lg:col-start-11 col-end-13 justify-self-stretch self-start"
                    id="navbar"
                >
                    <ul className="flex md:flex-row justify-end md:space-x-10 w-full transition-colors ">
                        {/* <p
                            className="block py-2 pl-3 pr-4 text-black sm:text-xl rounded md:p-0 hover:text-accent hover:cursor-pointer"
                            onClick={() =>
                                setProjectsListOpen(!projectsListOpen)
                            }
                        >
                            Projects
                        </p> */}
                        {navLinks.map((link, i) => (
                            <li className="sm:text-xl" key={i}>
                                <NavLink title={link.title} href={link.path} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navMenuOpen ? (
                <MenuOverlay links={navLinks} toggleNavMenu={setNavMenuOpen} />
            ) : null}
            {projectsListOpen ? (
                <ProjectsDropdown setProjectsListOpen={setProjectsListOpen} />
            ) : null}
        </nav>
    )
}
