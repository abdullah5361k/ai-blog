import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /** Extend session.user */
  interface Session {
    user: {
      id?: string;       
    } & DefaultSession["user"]; 
  }

//   interface JWT {
//     id: string;
//   }
}
