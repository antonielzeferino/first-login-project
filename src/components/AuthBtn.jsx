"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()} className="bg-red-500 text-white p-2">Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-green-500 text-white p-2">Sign in</button>
      )}
    </div>
  )
}
