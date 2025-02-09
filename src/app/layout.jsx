"use client"

import { SessionProvider } from "next-auth/react"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className=" flex flex-col w-full min-h-screen bg-gray-300 bg-gradient-to-br from-blue-500 to-purple-600">
          <header className="flex gap-4 fixed p-4">
            <Link href={"/"}>Inicio</Link>
            <Link href={"/dashboard"}>dashboard</Link>
          </header>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
