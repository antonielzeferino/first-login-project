"use client"

import { SessionProvider } from "next-auth/react"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="p-4 flex flex-col w-full min-h-screen">
          <header className="flex gap-4">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/dashboard"}>dashboard</Link>
          </header>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
