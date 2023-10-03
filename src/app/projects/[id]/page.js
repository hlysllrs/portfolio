'use client'

import { PROJECT_DATA } from '../../data/projectData'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

export default function Project({ params }) {
    const project = PROJECT_DATA.find((project) => params.id === project.pathId)

    return (
        <main className="flex flex-col flex-1 max-h-full m-4 text-base md:text-lg leading-tight md:leading-tight md:overflow-hidden">
            <div className="md:relative md:max-h-full flex-1 md:grid md:grid-cols-12 gap-4">
                <div className="md:col-span-7 justify-self-stretch md:max-h-full w-full md:overflow-y-auto md:scrollbar-hide md:overflow-x-hidden flex flex-col">
                    <Image
                        src={project.image1.url}
                        alt={project.title}
                        width={project.image1.width}
                        height={project.image1.height}
                        priority={true}
                        className="object-cover"
                    />
                    <div className="w-full pt-2 md:grid md:grid-cols-12 md:gap-2">
                        <Image
                            src={project.image2.url}
                            alt={project.title}
                            width={project.image2.width}
                            height={project.image2.height}
                            priority={false}
                            className="pb-2 md:pb-0 md:col-span-7"
                        />
                        <Image
                            src={project.image3.url}
                            alt={project.title}
                            width={project.image3.width}
                            height={project.image3.height}
                            priority={false}
                            className="md:col-start-8 col-end-13"
                        />
                    </div>
                    <div className="w-full pt-2 md:grid md:grid-cols-12 md:gap-2">
                        <Image
                            src={project.image4.url}
                            alt={project.title}
                            width={project.image4.width}
                            height={project.image4.height}
                            priority={false}
                            className="pb-2 md:pb-0 md:col-span-5"
                        />
                        <Image
                            src={project.image5.url}
                            alt={project.title}
                            width={project.image5.width}
                            height={project.image5.height}
                            priority={false}
                            className="md:col-start-6 col-end-13"
                        />
                    </div>
                    <Image
                        src={project.image6.url}
                        alt={project.title}
                        width={project.image6.width}
                        height={project.image6.height}
                        priority={false}
                        className="pt-2"
                    />

                    <Image
                        src={project.image7.url}
                        alt={project.title}
                        width={project.image7.width}
                        height={project.image7.height}
                        priority={false}
                        className="pt-2"
                    />
                </div>
                <div className="md:col-start-8 md:col-end-13 mt-6 md:mt-0 text-left flex flex-col justify-between h-full md:overflow-hidden">
                    <div>
                        <h1 className="text-2xl">{project.title}</h1>
                        <p className="text-base md:text-lg">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <Link
                            href={project.github}
                            className="mt-3 w-full rounded-full border border-accent bg-transparent px-4 py-1 hover:bg-accent hover:text-background sm:w-fit text-center"
                            target="_blank"
                        >
                            View GitHub Repo{' '}
                            <ArrowLongRightIcon className="h-8 w-8 inline" />
                        </Link>
                        <Link
                            href={project.deployed}
                            className="mt-3 w-full rounded-full border border-accent bg-transparent px-4 py-1 hover:bg-accent hover:text-background sm:w-fit text-center"
                            target="_blank"
                        >
                            View Live Demo{' '}
                            <ArrowLongRightIcon className="h-8 w-8 inline" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
