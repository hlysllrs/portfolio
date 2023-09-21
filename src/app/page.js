import Image from 'next/image'
import Head from 'next/head'
import ProjectCard from './components/ProjectCard'
import { PROJECT_CARD_DATA } from './data/data'

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col bg-[#f6f6f6] mt-24">
            <div className="container mx-auto  px-12 py-4">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
                    />
                </Head>
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                        <div className="col-span-7 place-self-center text-center sm:text-left">
                            <h1 className="mb-4 text-7xl font-bold text-black sm:text-8xl lg:text-9xl">
                                <span className="bg-gradient-to-r from-[#4bbd04] to-[#00B8D4] bg-clip-text text-transparent">
                                    hello
                                </span>
                            </h1>
                            <p className="mb-6 text-base text-black sm:text-lg lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div>
                                {PROJECT_CARD_DATA.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        imageUrl={project.image}
                                        title={project.title}
                                        id={project.id}
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
