'use client'

import { CldImage } from 'next-cloudinary'
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
                    <CldImage
                        src={project.image1.CldPublicID}
                        alt={project.title}
                        width={project.image1.width}
                        height={project.image1.height}
                        className="object-cover"
                    />
                    <div className="w-full pt-2 md:grid md:grid-cols-12 md:gap-2">
                        <CldImage
                            src={project.image2.CldPublicID}
                            alt={project.title}
                            width={project.image2.width}
                            height={project.image2.height}
                            className="pb-2 md:pb-0 md:col-span-7"
                        />
                        <CldImage
                            src={project.image3.CldPublicID}
                            alt={project.title}
                            width={project.image3.width}
                            height={project.image3.height}
                            className="md:col-start-8 col-end-13"
                        />
                    </div>
                    <div className="w-full pt-2 md:grid md:grid-cols-12 md:gap-2">
                        <CldImage
                            src={project.image4.CldPublicID}
                            alt={project.title}
                            width={project.image4.width}
                            height={project.image4.height}
                            className="pb-2 md:pb-0 md:col-span-5"
                        />
                        <CldImage
                            src={project.image5.CldPublicID}
                            alt={project.title}
                            width={project.image5.width}
                            height={project.image5.height}
                            className="md:col-start-6 col-end-13"
                        />
                    </div>
                    <CldImage
                        src={project.image6.CldPublicID}
                        alt={project.title}
                        width={project.image6.width}
                        height={project.image6.height}
                        className="pt-2"
                    />
                    {project.image7 && (
                        <CldImage
                            src={project.image7.CldPublicID}
                            alt={project.title}
                            width={project.image7.width}
                            height={project.image7.height}
                            className="pt-2"
                        />
                    )}
                </div>
                <div className="md:col-start-8 md:col-end-13 mt-6 md:mt-0 text-left flex flex-col justify-between h-full md:overflow-hidden">
                    <div>
                        <h1 className="text-2xl pb-4">{project.title}</h1>
                        <p className="text-base md:text-lg pb-8 leading-tight md:leading-tight">
                            {project.description}
                        </p>
                        <div className="pb-8">
                            <p className="pb-1">Built With:</p>
                            <ul className="list-disc pl-5 leading-snug md:leading-snug">
                                {project.dependencies.map((dep, idx) => (
                                    <li key={idx}>{dep}</li>
                                ))}
                            </ul>
                        </div>
                        {project.notes && (
                            <p className="text-xs">{project.notes}</p>
                        )}
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
                        {project.deployed && (
                            <Link
                                href={project.deployed}
                                className="mt-3 w-full rounded-full border border-accent bg-transparent px-4 py-1 hover:bg-accent hover:text-background sm:w-fit text-center"
                                target="_blank"
                            >
                                View Live Demo{' '}
                                <ArrowLongRightIcon className="h-8 w-8 inline" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
