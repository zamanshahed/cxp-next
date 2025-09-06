import NextAuth, { NextAuthOptions } from "next-auth";
import StravaProvider from "next-auth/providers/strava";

// Define Strava’s API response type
interface StravaProfile {
  id: number;
  firstname: string;
  lastname: string;
  profile: string;
  email?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    StravaProvider({
      clientId: process.env.STRAVA_CLIENT_ID!,
      clientSecret: process.env.STRAVA_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = (account as any).access_token;
        token.refreshToken = (account as any).refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
