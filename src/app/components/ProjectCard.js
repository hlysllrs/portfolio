import Link from 'next/link'

export default function ProjectCard({ imageUrl, title, id }) {
    return (
        <div>
            <div
                className="h-52 md:h-72 lg:h-92"
                style={{
                    background: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                }}
            ></div>
            <h5 className="text-black bg-[#f6f6f6] px-2 pt-2 font-semibold text-xl md:text-2xl hover:text-[#4bbd04]">
                {id}{' '}
                <Link
                    href={`/project/${title.toLowerCase().replace(' ', '-')}`}
                >
                    {title}
                </Link>
            </h5>
        </div>
    )
}
