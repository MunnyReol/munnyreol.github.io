import Navbar from './Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children, page }) {

    return (
        <main className='bg-dark text-light vh-100'>
            <Navbar page={page} />
            <main className={`${inter.className} container mt-2`}> {/* if we use inter.className before navbar then navbar logo appears in the bottom of the page */}
                {children}
            </main>
        </main>
    )
}