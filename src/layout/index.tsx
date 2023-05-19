import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Programmer's Profile",
  description: "This is a website that allows programmers to create a personalized profile to showcase their skills, experience and projects to potential employers and clients, while also providing a community for collaboration and knowledge-sharing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
