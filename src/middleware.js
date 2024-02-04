import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("accessToken")?.value; //  return NextResponse.redirect(new URL("/login", requeast.url));
  //   if (requeast.nextUrl.pathname != "/login" && !data) {
  console.log("middleware start");
  console.log(accessToken);
  const loggeduserNotAccesspath =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/register";
  console.log(loggeduserNotAccesspath, "dddddd");

  if (loggeduserNotAccesspath) {
    if (accessToken) {
      return NextResponse.redirect(new URL("/account", request.url));
    }
  }
}
export const config = {
  matcher: ["/about/:path*", "/account/:path*", "/login", "/register"],
};
