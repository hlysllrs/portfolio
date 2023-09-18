import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hailey Sellars',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="main"></div>
        <main classname="app">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
