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
            <body className="bg-[#f6f6f6] min-h-screen flex flex-col">
                <NavBar />
                <main className="app mt-24 w-screen flex-1 flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
