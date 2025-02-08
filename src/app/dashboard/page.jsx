import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import withAuth from "@/lib/withAuth"

async function Dashboard() {
  const session = await getServerSession(authOptions)

/*   if (!session) {
    console.log("oi") // Debug
    redirect("/login") // Redireciona para login se não autenticado
  } */

  return (
    <div className="flex-grow flex items-center justify-center">
      <h1 className="text-3xl">Welcome, {session.user?.email}!</h1>
    </div>
  )
}

export default withAuth(Dashboard)