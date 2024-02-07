import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Rakib Hossain',
  description: 'Software Engineer, Web Developer, and Open Source Contributor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="home-page">{children}</body>
    </html>
  )
}
