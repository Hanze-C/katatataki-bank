import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'COSA Anti-Piracy Center',
  description: '序列号验证与发行',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
