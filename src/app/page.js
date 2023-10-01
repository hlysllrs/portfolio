'use client'

import HelloImg from '../../public/images/hello.svg'
import HelloAnimation from './components/HelloAnimation'

export default function Home() {
    return (
        <main className="flex flex-col justify-end flex-1 h-full bg-[#f6f6f6] m-4">
            <section className="relative h-full w-full">
                {/* plain svg image hello for small screens*/}
                <HelloImg className="md:hidden" />
                {/* hello animation for larger screens */}
                <HelloAnimation />
            </section>
        </main>
    )
}

/*
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
