# Next.js Authentication with NextAuth.js

Este projeto demonstra como configurar autenticação em um aplicativo Next.js usando o **App Router** e **NextAuth.js**.

## 🚀 Tecnologias
- Next.js (App Router)
- NextAuth.js
- Tailwind CSS (opcional para estilização)

## 📌 Configuração

### 1️⃣ Clone o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instale as dependências
```sh
npm install
# ou
yarn install
```

### 3️⃣ Configure variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```sh
NEXTAUTH_SECRET=uma_chave_segura
NEXTAUTH_URL=http://localhost:3000
# Configuração do provedor de autenticação (exemplo: GitHub)
GITHUB_CLIENT_ID=seu_client_id
GITHUB_CLIENT_SECRET=seu_client_secret
```

### 4️⃣ Configure o NextAuth.js
Crie o arquivo `app/api/auth/[...nextauth]/route.ts`:
```ts
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

### 5️⃣ Criando uma Página de Login
Crie `app/login/page.tsx`:
```tsx
"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Login com GitHub
      </button>
    </div>
  );
}
```

### 6️⃣ Protegendo uma Página (Exemplo: Dashboard)
Crie `app/dashboard/page.tsx`:
```tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <h1>Bem-vindo, {session.user?.email}!</h1>;
}
```

### 7️⃣ Rodando o projeto
```sh
npm run dev
# ou
yarn dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador e teste a autenticação!

---

## 🔒 Protegendo Várias Páginas
Se precisar proteger todas as páginas dentro de uma pasta, crie um `layout.tsx`:
```tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return <>{children}</>;
}
```
Isso protege todas as páginas dentro de `app/dashboard/` automaticamente.

---

## 🎯 Conclusão
Agora você tem autenticação funcional no **Next.js App Router** usando **NextAuth.js**! Se precisar de mais provedores, basta adicioná-los em `authOptions`.

💡 **Dúvidas ou sugestões? Abra uma issue no repositório!** 🚀

