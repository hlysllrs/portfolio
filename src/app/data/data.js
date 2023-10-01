export const ABOUT_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className="list-disc pl-4">
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>Tailwind</li>
                <li>Figma</li>
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

export const PROJECT_DATA = [
    {
        id: 1,
        title: 'Lounger',
        pathId: 'lounger',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: './images/lounger/home-page.png',
        github: 'https://github.com/hlysllrs/unit-3-project',
        deployed: 'https://lounger.hlysllrs.me',
    },
    // {
    //     id: 2,
    //     title: 'Dock It',
    //     pathId: 'dock-it',
    //     description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    //     image: '',
    // },
    // {
    //     id: 3,
    //     title: 'a brick breaker game™',
    //     pathId: 'brick-breaker',
    //     description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    //     image: '',
    // },
    // {
    //     id: 4,
    //     title: 'Bazaar',
    //     pathId: 'bazaar',
    //     description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    //     image: '',
    // },
]
