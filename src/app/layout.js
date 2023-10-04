import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
    title: 'Hailey Sellars',
    description: 'Hailey Sellars Portfolio',
}

const graphik = localFont({
    src: [
        {
            path: './fonts/Graphik-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Graphik-RegularItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/Graphik-Semibold.otf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-graphik',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${graphik.variable} font-sans`}>
            <body className="font-sans text-black font-semibold bg-background min-h-screen md:h-screen flex flex-col">
                <NavBar />
                <main className="app mt-12 md:mt-16 w-screen flex-1 flex flex-col overflow-y-scroll">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
