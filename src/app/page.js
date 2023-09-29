'use client'

import ProjectCard from './components/ProjectCard'
import { PROJECT_DATA } from './data/data'
import { motion } from 'framer-motion'
import HelloImg from '../../public/images/hello.svg'
import useMousePosition from './utils/useMousePosition'
import { useState } from 'react'
import HelloAnimation from './components/HelloAnimation'
import HelloAnimationV2 from './components/HelloAnimationV2'

export default function Home() {
    const [isHovered, setIsHovered] = useState(false)

    const { x, y } = useMousePosition()
    const size = isHovered ? 400 : 40
    return (
        <main className="flex flex-col justify-end flex-1 h-full bg-[#f6f6f6] m-4">
            <section className="relative h-full w-full">
                {/* plain svg image hello */}
                {/* <HelloImg
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                /> */}
                {/* hello animation */}
                {/* <HelloAnimation /> */}
                <HelloAnimationV2 />
                {/* 🟥 hello animation in progress 🟥 */}
                {/* <div className="w-full flex flex-col justify-end h-auto bg-black hover:bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] [mask-image:url('../../public/images/hello.svg')] [mask-repeat:no-repeat]"></div> */}
                {/* <motion.div
                    className="[mask-image:url('../../public/images/mask.svg')] [mask-repeat:no-repeat] absolute top-0 left0 flex-1 w-full h-full transition-transform duration-100 bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] pointer-events-none"
                    animate={{
                        WebkitMaskPosition: `${x - size / 2}px ${
                            y - size / 2
                        }px`,
                        WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: 'tween', ease: 'backOut' }}
                ></motion.div> */}
            </section>
        </main>
    )
}

/* 

// small gradient hello
<div className="flex items-center justify-center w-full h-[90vh]">
    <h1 className="mb-4 text-xl font-semibold text-black sm:text-2xl lg:text-9xl">
        <div className="bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#00b8d4] hover:to-[#4bbd04] hover:cursor-default transition duration-500">
            hello
        </div>
    </h1>
</div>
<div className="text-left">

// project card
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
