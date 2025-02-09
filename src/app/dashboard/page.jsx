import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import withAuth from "@/lib/withAuth"
import Image from "next/image"

async function Dashboard() {
  const session = await getServerSession(authOptions)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
          {session.user?.name}!
        </h1>
        <p className="text-lg text-gray-700">Você está logado no nosso sistema.</p>
        <div className="mt-8 text-center">
          <h2 className="text-3xl text-gray-800 font-semibold">Olha pra esse gato</h2>
          <Image 
            src="https://imgs.search.brave.com/v4tsTc17ncnYvzYcMvnGfQSkABq-cLHpeZRyrvL--aU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc2/MTA3NDE2L3Bob3Rv/L21vdG9yY3ljbGUt/Y2F0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1maG1vRThy/bFFVbGh4eEY4OC11/TV9wVzZQV2M3b2xW/VGNqMl90ZUVpaEJ3/PQ" 
            alt="Gato fofo" 
            width={400}
            height={400}
            className="mt-4 rounded-lg shadow-md w-40 h-40 object-cover mx-auto"
          />
          <p className="mt-2 text-lg text-gray-600">Não se preocupe, você está seguro aqui!</p>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Dashboard)
