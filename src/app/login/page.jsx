"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Login</h1>
        <button
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="w-full bg-gray-800 text-white p-3 rounded-md hover:bg-gray-900 transition duration-200 mb-4"
        >
          Entrar com GitHub
        </button>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Entrar
          </button>
        </form>

        <div className="mt-4 text-center">
          Não tem uma conta?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-700 underline">
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  )
}
