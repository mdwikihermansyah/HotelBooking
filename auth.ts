import NextAuth from "next-auth"
import { prisma } from "./lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    jwt({token, user }) {
      if(user) { token.role = user.role }
      return token
    },
    session({ session, token }) {
     session.user.id = token.sub;
     session.user.role = token.role;
     return session;
    }
  }
});