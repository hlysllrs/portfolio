'use client'

import ProjectCard from './components/ProjectCard'
import { PROJECT_DATA } from './data/data'
import { motion } from 'framer-motion'
import HelloImg from '../../public/images/hello.svg'
import Footer from './components/Footer'
import useMousePosition from './utils/useMousePosition'
import { useState } from 'react'

export default function Home() {
    const [isHovered, setIsHovered] = useState(false)

    const { x, y } = useMousePosition()
    const size = isHovered ? 400 : 40
    return (
        <main className="flex flex-col bg-[#f6f6f6] mt-24">
            <section className="container flex-1 relative w-screen py-4">
                <div className="w-full h-screen bg-black hover:bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] [mask-image:url('../../public/images/hello.svg')] [mask-repeat:no-repeat]">
                    {/* <HelloImg
                        className="h-full w-full hover:bg-gradient-to-r from-black to-white"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    /> */}
                </div>
                <motion.div
                    className="[mask-image:url('../../public/images/mask.svg')] [mask-repeat:no-repeat] absolute flex-1 w-full h-full transition-transform duration-100 bg-gradient-to-r from-[#4bbd04] to-[#00B8D4]"
                    animate={{
                        WebkitMaskPosition: `${x - size / 2}px ${
                            y - size / 2
                        }px`,
                        WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: 'tween', ease: 'backOut' }}
                ></motion.div>
            </section>

            <Footer />
        </main>
    )
}

/* 
;<div className="flex items-center justify-center w-full h-[90vh]">
    <h1 className="mb-4 text-xl font-semibold text-black sm:text-2xl lg:text-9xl">
        <span className="bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#00b8d4] hover:to-[#4bbd04] hover:cursor-default transition duration-500">
            hello
        </span>
    </h1>
</div>
<div className="text-left">
{PROJECT_DATA.map((project) => (
    <ProjectCard
        key={project.id}
        imageUrl={project.image}
        title={project.title}
        id={project.id}
        pathId={project.pathId}
    />
))}
</div> */
