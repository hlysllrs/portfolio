import Link from 'next/link'

export default function ProjectCard({ imageUrl, title, id, pathId }) {
    return (
        <div>
            <div
                className="h-52 md:h-72 lg:h-92"
                style={{
                    background: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <h5 className="text-black bg-background px-2 pt-2 font-semibold text-xl md:text-2xl hover:text-accent">
                {id} <Link href={pathId}>{title}</Link>
            </h5>
        </div>
    )
}
