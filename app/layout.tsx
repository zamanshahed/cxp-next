// app/layout.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"; // your authOptions
import type { ReactNode } from "react";
import Providers from "./providers";
import "./globals.css";
import Login from "./components/login/Login";
import UserGreet from "./components/sessionUser/UserGreet";
import Navbar from "./components/navigation/Navbar";
import { useAuthStore } from "@/lib/store/authStore";

export const metadata = {
  title: "CXP Next",
  description:
    "CXP Next | a web app that you can use to track your Strava activities",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    useAuthStore.setState({ authToken: session?.accessToken });
  }
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-rose-300">
        <header>
          {session ? (
            <div className="p-2 md:p-5">
              <Navbar
                username={session.user?.name || ""}
                avatarUrl={session.user?.image || ""}
                session={session}
              />
              <div className="mb-2" />
              <main>
                <Providers>{children}</Providers>
              </main>
            </div>
          ) : (
            <Login />
          )}
        </header>
      </body>
    </html>
  );
}
