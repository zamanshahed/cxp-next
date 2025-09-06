// app/layout.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"; // your authOptions
import type { ReactNode } from "react";
import Providers from "./providers";
import "./globals.css";
import Login from "./components/login/Login";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  const metadata = {
    title: "CXP Next",
    description:
      "CXP Next | a web app that you can use to track your Strava activities",
  };

  return (
    <html lang="en">
      <body>
        <header>
          {session ? (
            <div>
              <span>Welcome, {session.user?.name}</span>
              <button>Logout</button>
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
