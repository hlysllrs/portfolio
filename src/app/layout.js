import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './globals.css'

export const metadata = {
    title: 'Hailey Sellars',
    description: 'Hailey Sellars Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="text-black font-semibold bg-background min-h-screen md:h-screen flex flex-col">
                <NavBar />
                <main className="app mt-12 md:mt-16 w-screen flex-1 flex flex-col overflow-y-scroll">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
