import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
    imageUrl,
    title,
    id,
    pathId,
    description,
}) {
    return (
        <div>
            <Link href={`/projects/${pathId}`}>
                <div
                    className="h-[calc(58vw-2rem)] md:h-[calc(29vw-2.5rem)] relative group"
                    style={{
                        background: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="overlay absolute top-0 left-0 w-full h-full pl-4 pb-3 text-background bg-accent bg-opacity-0 hidden group-hover:flex hover:flex-col hover:items-start hover:justify-end group-hover:bg-opacity-80 transition ease-in-out duration-500">
                        <p className="text-lg md:text-2xl">{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
