import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Pierre- Développeur Web-Marly le Roi',
  description: 'Pierre Dillard est un développeur  Web, basé à Marly-le-roi (78160)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
