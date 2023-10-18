import Image from 'next/image'

export const ABOUT_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="flex flex-wrap gap-4">
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                            height={50}
                            width={50}
                            alt="JavaScript logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">JavaScript</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                            height={50}
                            width={50}
                            alt="Node.js logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Node.js</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                            height={50}
                            width={50}
                            alt="Express.js logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Express.js</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                            height={50}
                            width={50}
                            alt="MongoDB logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">MongoDB</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            height={50}
                            width={50}
                            alt="React.js logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">React.js</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                            height={50}
                            width={50}
                            alt="Next.js logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Next.js</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                            height={50}
                            width={50}
                            alt="CSS logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">CSS</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            height={50}
                            width={50}
                            alt="Sass logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Sass</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                            height={50}
                            width={50}
                            alt="TailwindCSS logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">TailwindCSS</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                            height={50}
                            width={50}
                            alt="Figma logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Figma</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg"
                            height={50}
                            width={50}
                            alt="Adobe Illustrator logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Illustrator</p>
                    </div>
                </li>
                <li>
                    <div className="w-16 h-20 flex flex-col justify-end items-center">
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
                            height={50}
                            width={50}
                            alt="Photoshop logo"
                            priority
                            className="grayscale brightness-75"
                        />
                        <p className="text-xs text-center pt-2">Photoshop</p>
                    </div>
                </li>
            </ul>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className="list-disc pl-4">
                <li className="mb-4">
                    <div>
                        <p>General Assembly</p>
                        <p className="font-normal italic">
                            Software Engineering Immersive
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>The University of Texas at Austin</p>
                        <p className="font-normal italic">
                            B.S. Textiles and Apparel Design
                        </p>
                    </div>
                </li>
            </ul>
        ),
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className="list-disc pl-4">
                <li className="mb-4">
                    <div>
                        <p>General Assembly</p>
                        <p className="font-normal italic">
                            Software Engineering Student
                        </p>
                    </div>
                </li>
            </ul>
        ),
    },
]
