import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer grid grid-cols-1 md:grid-cols-12 mx-4 mb-4 text-xl font-semibold">
            <div className="md:col-span-3 flex md:space-x-10 justify-start">
                <Link
                    href="mailto:hello@haileysellars.com"
                    className="hover:text-accent"
                >
                    Email
                </Link>
                <Link
                    href="https://www.linkedin.com/in/hailey-sellars/"
                    target="_blank"
                    className="hover:text-accent"
                >
                    LinkedIn
                </Link>
                <Link
                    href="https://github.com/hlysllrs"
                    target="_blank"
                    className="hover:text-accent"
                >
                    GitHub
                </Link>
            </div>
            <div className="md:col-start-12 justify-self-end">
                <p className="">©2023</p>
            </div>
        </footer>
    )
}
