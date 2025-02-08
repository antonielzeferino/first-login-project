import AuthButton from "@/components/AuthBtn";

function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-grow">
      <div>
        <h1 className="text-3xl">Next.js Authentication</h1>
        <AuthButton />
      </div>
    </main>
  )
}

export default Home