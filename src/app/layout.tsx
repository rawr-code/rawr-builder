import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-nunito',
})

const title = 'RawrFlow'
const description = 'Generated by create next app'

const url = 'https://rawr-builder.vercel.app/'
const images = '/preview.png'

export const metadata: Metadata = {
    title: 'RawrFlow',
    description,
    openGraph: {
        title,
        description,
        images,
        url,
        type: 'website',
    },
    twitter: {
        title,
        description,
        images,
        card: 'summary_large_image',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    )
}
