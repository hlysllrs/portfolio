import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <Link
                href="https://www.linkedin.com/in/hailey-sellars/"
                target="_blank"
            >
                <i className="devicon-linkedin-plain"></i>
            </Link>
            <Link href="https://github.com/hlysllrs" target="_blank">
                <i className="devicon-github-original"></i>
            </Link>
        </footer>
    )
}
