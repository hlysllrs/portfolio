'use client'

import HelloImg from '../../public/images/hello.svg'
import HelloAnimation from './components/HelloAnimation'

export default function Home() {
    return (
        <main className="flex-1 flex flex-col h-full bg-background m-4">
            <section className="relative flex-1 flex flex-col justify-end h-full w-full">
                {/* plain svg image hello for small screens*/}
                <HelloImg className="md:hidden" />
                {/* hello animation for larger screens */}
                <HelloAnimation />
            </section>
        </main>
    )
}
