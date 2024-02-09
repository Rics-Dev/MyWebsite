import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Racim | Portfolio',
  description: 'Portfolio de Fethallah Mohamed Racim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-100 text-blue-950 relative h-auto   dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#EBF8FF] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#23475a] '></div>
        <div className='bg-[#EBF4FF] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-10rem] 2xl:left-[-10rem] dark:bg-[#233e5a]'></div>

        {children}

        <Analytics />
      </body>
    </html>
  )
}
