import { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata = {
    title: 'Hailey Sellars',
    description: 'Hailey Sellars Portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#f6f6f6]">
                <Toaster
                    position="bottom-right"
                    toastOptions={{ duration: 3000 }}
                />
                <NavBar />
                <main className="app">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
