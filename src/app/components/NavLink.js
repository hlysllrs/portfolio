import Link from 'next/link'

export default function NavLink({ href, title }) {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-black rounded md:p-0 hover:text-[#4bbd04]"
        >
            {title}
        </Link>
    )
}
