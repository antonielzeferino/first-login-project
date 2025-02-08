import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default function withAuth(Component) {
  return async function ProtectedComponent() {
    const session = await getServerSession(authOptions)

    if (!session) {
      redirect("/login")
    }

    return <Component />
  }
}
