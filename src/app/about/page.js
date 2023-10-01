'use client'

import Image from 'next/image'
import { useState, useTransition } from 'react'
import TabButton from '../components/TabButton'
import { ABOUT_DATA } from '../data/data'

export default function About() {
    const [activeTab, setActiveTab] = useState('skills')
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setActiveTab(id)
        })
    }

    return (
        <main className="text-black mx-4">
            <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 xl:px-16">
                <div className="bg-slate-200 h-full w-full flex justify-center items-center">
                    Photo Of Me Here
                </div>
                {/* <Image
                    src="/next.svg"
                    alt="Hailey Sellars"
                    width={500}
                    height={500}
                /> */}
                <div className="mt-6 md:mt-0 text-left flex-col height-full">
                    <p className="text-black md:text-lg text-base">
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
                    <div className="mt-4">
                        {ABOUT_DATA.find((tab) => tab.id === activeTab).content}
                    </div>
                    <div>
                        <i className="devicon-javascript-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-express-original"></i>
                    </div>
                    <div>
                        <i className="devicon-nodejs-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-mongodb-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-react-original"></i>
                    </div>
                    <div>
                        <i className="devicon-nextjs-original"></i>
                    </div>
                    <div>
                        <i className="devicon-html5-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-css3-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-sass-original"></i>
                    </div>
                    <div>
                        <i className="devicon-vscode-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-git-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-figma-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-photoshop-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-illustrator-plain"></i>
                    </div>
                    <div>
                        <i className="devicon-jest-plain"></i>
                    </div>
                    <a
                        href="/assets/hailey-sellars-resume.pdf"
                        className="mt-3 block w-full rounded-full border border-[#4bbd04] bg-transparent px-6 py-3 hover:bg-[#4bbd04] hover:text-[#f6f6f6] sm:w-fit"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </main>
    )
}
