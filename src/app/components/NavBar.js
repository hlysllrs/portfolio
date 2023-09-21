'use client'
import Link from 'next/link'
import NavAnimation from './NavAnimation'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import { useState } from 'react'
import { Bars3Icon, XmarkIcon } from '@heroicons/react/24/solid'

export default function NavBar() {
    const [navMenuOpen, setNavMenuOpen] = useState(false)

    const navLinks = [
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ]
    return (
        <nav className="fixed top-0 left-0 z-5 bg-[#f6f6f6] bg-opacity-100 w-screen">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="text-xl md:text-2xl text-black font-semibold"
                >
                    Hailey Sellars is a <NavAnimation />
                    <br />
                    based in New York City.
                </Link>
                <div className="mobile-menu block md:hidden ">
                    {navMenuOpen ? (
                        <button
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                            className="flex text-black items-center px-1 py-1 border rounded border-black hover:text-[#4bbd04] hover:border-[#4bbd04]"
                        >
                            <XmarkIcon className="h-5 w-5 " />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavMenuOpen(!navMenuOpen)}
                            className="flex text-black items-center px-1 py-1 border rounded border-black hover:text-[#4bbd04] hover:border-[#4bbd04]"
                        >
                            <Bars3Icon className="h-5 w-5 " />
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10 ">
                        {navLinks.map((link, i) => (
                            <li key={i}>
                                <NavLink title={link.title} href={link.path} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navMenuOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}
