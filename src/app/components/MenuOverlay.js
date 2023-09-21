import NavLink from './NavLink'

export default function MenuOverlay({ links }) {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, i) => (
                <li key={i}>
                    <NavLink title={link.title} href={link.path} />
                </li>
            ))}
        </ul>
    )
}
