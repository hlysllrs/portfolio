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
            <body className="bg-bgcolor">
                <NavBar />
                <main className="app">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
