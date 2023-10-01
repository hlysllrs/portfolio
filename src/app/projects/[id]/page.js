import { PROJECT_DATA } from '../../data/projectData'
import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

export default function Project({ params }) {
    const project = PROJECT_DATA.find((project) => params.id === project.pathId)

    return (
        <div className="mt-24 md:grid md:grid-cols-2 gap-8 xl:gap-16 sm:py-16 xl:px-16">
            <div className="w-full">
                <div
                    className="h-52 md:h-72 lg:h-96"
                    style={{
                        background: `url(${project.image})`,
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
            <div className="flex flex-col items-start justify-between">
                <div>
                    <h1 className="text-2xl sm:text-3xl">{project.title}</h1>
                    <p className="text-base md:text-lg">
                        {project.description}
                    </p>
                </div>
                <div className="flex flex-col">
                    <Link
                        href={project.github}
                        className="text-black text-lg font-semibold hover:text-accent"
                        target="_blank"
                    >
                        View GitHub Repo{' '}
                        <ArrowLongRightIcon className="h-7 w-7 inline" />
                    </Link>
                    <Link
                        href={project.github}
                        className="text-black text-lg font-semibold hover:text-accent"
                        target="_blank"
                    >
                        View Live Site{' '}
                        <ArrowLongRightIcon className="h-7 w-7 inline" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
