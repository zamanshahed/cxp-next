// authMiddleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes requiring authentication
const protectedRoutes = ["/dashboard", "/profile"]; // add all protected pages
// Routes accessible only to non-logged-in users
const authRoutes = ["/login", "/register"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value; // default cookie from NextAuth
  const { pathname } = req.nextUrl;

  // If logged-in user tries to access login/register, redirect to home
  if (authRoutes.some((route) => pathname.startsWith(route)) && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If non-logged-in user tries to access protected routes, redirect to login
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise, allow request
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/", "/dashboard/:path*", "/profile/:path*", "/login", "/register"],
};
