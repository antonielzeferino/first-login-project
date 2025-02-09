"use client"

import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthButton() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      {session ? (
        <div>
          <p className="text-gray-700 mb-4">Signed in as <span className="font-semibold">{session.user?.email}</span></p>
          <button 
            onClick={() => signOut({redirect: false})} 
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-all"
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-all"
          onClick={() => router.push("/login")}
        >
          Sign in
        </button>
      )}
    </div>
  )
}
