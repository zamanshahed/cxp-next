// app/layout.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route"; // your authOptions
import type { ReactNode } from "react";
import Providers from "./providers";
import "./globals.css";
import Login from "./components/login/Login";
import UserGreet from "./components/sessionUser/UserGreet";

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

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-rose-300">
        <header>
          {session ? (
            <div className="p-5">
              <UserGreet session={session} />
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
