import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value; //  return NextResponse.redirect(new URL("/login", requeast.url));
  const loggeduserNotAccesspath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";

  if (loggeduserNotAccesspath) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }
}
export const config = {
  matcher: ["/about/:path*", "/account/:path*", "/login", "/register"],
};
