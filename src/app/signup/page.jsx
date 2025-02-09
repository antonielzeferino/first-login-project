"use client"

import Link from "next/link"
import { useState } from "react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError(null)
    setSuccess(null)

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(data.message)
        // Redireciona para a página de login
        setTimeout(() => {
          window.location.href = "/login"
        }, 2000)
      } else {
        setError(data.message)
      }
    } catch (error) {
      setError("Ocorreu um erro ao tentar se registrar.")
    }
  }

  return (
    <div className="flex justify-center items-center flex-grow bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
            Registrar
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
        <div className="mt-4 text-center">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-700 underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
