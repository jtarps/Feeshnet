import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Feeshnet — Building products that solve real problems",
  description:
    "Feeshnet is a collective of AI-native ventures — from healthcare operations to education technology. One founder. Many solutions.",
  keywords: "feeshnet, ventures, AI operations, healthcare, edtech, govtech, startups",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
