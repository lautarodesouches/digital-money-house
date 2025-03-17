import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '800'],
    style: ['normal', 'italic'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Digital Money App',
    description: 'Tu nueva billetera virtual',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <Head>
                <title>Digital Money House</title>
            </Head>
            <body className={`${openSans.className}`}>{children}</body>
        </html>
    )
}
