import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { findUser } from "@/lib/users";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;
        const u = findUser(credentials.username, credentials.password);
        if (!u) return null;
        // Only put SAFE fields on the session user:
        return { id: u.username, name: u.username, email: u.email };
      },
    }),
  ],
  session: { strategy: "jwt" },
};
