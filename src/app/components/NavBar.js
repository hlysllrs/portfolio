import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <Link href="/">Hailey Sellars is a software engineer based in NYC.</Link>
      <div>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
