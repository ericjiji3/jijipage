import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'jiji',
  description: 'A place for my personal/web dev endeavors:D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-dvh overflow-hidden bg-stone-50">
        <div className="border-r-2 border-stone-950">
          <Nav/>
        </div>
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
       
        
        </body>
    </html>
  )
}
