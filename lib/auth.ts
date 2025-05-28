import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import mongooseConnect from "@/lib/mongoose";
import User from "@/models/User.model";
import bcryptjs from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongooseConnect().then(client => client.connection.getClient())),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await mongooseConnect();

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const passwordsMatch = await bcryptjs.compare(
          credentials.password,
          user.password
        );

        if (!passwordsMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        // @ts-ignore
        token.name = user.name; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        // @ts-ignore
        session.user.id = token.id;
        // @ts-ignore
        session.user.name = token.name;
      }
      return session;
    },
  },
};
