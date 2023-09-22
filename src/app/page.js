import Image from 'next/image'
import ProjectCard from './components/ProjectCard'
import { PROJECT_DATA } from './data/data'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#f6f6f6] mt-24">
            <div className="container mx-auto px-12 py-4">
                <section>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-center sm:text-center w-full">
                            <div className="flex items-center justify-center w-full h-[90vh]">
                                <h1 className="mb-4 text-xl font-semibold text-black sm:text-2xl lg:text-4xl">
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
                            </div>
                        </div>
                        <div className="col-span-5"></div>
                    </div>
                </section>
            </div>
        </main>
    )
}
