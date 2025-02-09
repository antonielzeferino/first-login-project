import AuthButton from "@/components/AuthBtn";

function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
          Next.js Authentication
        </h1>
        <p className="text-gray-600 mb-6">
          Faça login para acessar sua conta e explorar os recursos incríveis.
        </p>
        <AuthButton />
      </div>
    </main>
  )
}

export default Home;
