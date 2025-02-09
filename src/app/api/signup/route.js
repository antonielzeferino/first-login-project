import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(req) {
  const { email, password, name } = await req.json()

  if (!email || !password) {
    return new Response("Email e senha são obrigatórios", { status: 400 })
  }

  // Verifica se o email já está registrado
  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    return new Response("Email já está em uso", { status: 400 })
  }

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash(password, 12)

  // Cria o usuário
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      provider: "credentials",
    },
  })

  return new Response(JSON.stringify({ message: "Usuário registrado com sucesso!" }), {
    status: 201,
  })
}
