// import { authOptions } from "@/lib/auth";
// import NextAuth from "next-auth";

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import clientPromise from "../../../../server/utils/clientPromise";
import dbConnect from "../../../../server/utils/dbConnect";
import User from "../../../../server/models/user";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Adapter } from "next-auth/adapters";
export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        await dbConnect();
        if (credentials == null) return null;
        //login
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
    signOut: "/signUp",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
