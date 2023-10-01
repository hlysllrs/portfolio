'use client'

import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from '../components/TabButton'
import { ABOUT_DATA } from '../data/data'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function About() {
    const [activeTab, setActiveTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setActiveTab(id)
        })
    }

    return (
        <main className="text-black font-semibold flex flex-col flex-1 m-4 text-base md:text-lg leading-tight md:leading-tight">
            <div className="flex-1 md:grid md:grid-cols-12 gap-2">
                <div className="col-span-6 h-fit w-full bg-grey bg-opacity-50">
                    <Image
                        src="/images/photo.png"
                        alt="Hailey Sellars"
                        width={800}
                        height={800}
                    />
                </div>

                <div className="col-start-8 col-end-13 mt-6 md:mt-0 text-left flex flex-col h-full">
                    <p className="">
                        Technical fashion designer turned software developer.
                        Fluent in balancing multiple projects and managing
                        technical processes with ever-changing priorities and
                        products. I believe in a seamless relationship between
                        form and function—bringing ideas to life through clean
                        code and engaging design.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={activeTab === 'skills'}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={activeTab === 'education'}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('experience')}
                            active={activeTab === 'experience'}
                        >
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-4 mb-8 flex-1">
                        {ABOUT_DATA.find((tab) => tab.id === activeTab).content}
                    </div>
                    <div className="flex flex-col">
                        <a
                            href="/assets/hailey-sellars-resume.pdf"
                            className="mt-3 w-full rounded-full border border-accent bg-transparent px-4 py-1 hover:bg-accent hover:text-background sm:w-fit text-center"
                            target="_blank"
                        >
                            Download Resume{' '}
                            <ArrowLongRightIcon className="h-8 w-8 inline" />
                        </a>
                        <Link
                            href="mailto:hello@haileysellars.com"
                            className="mt-3 w-full rounded-full border border-accent bg-transparent px-4 py-1 hover:bg-accent hover:text-background sm:w-fit text-center"
                        >
                            Get In Touch{' '}
                            <ArrowLongRightIcon className="h-8 w-8 inline" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
