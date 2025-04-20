import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in",
  "/sign-up",
  "/_next/image",
  "/_next/static",
  "/home",
]);

const isPublicApiRoute = createRouteMatcher(["/api/videos"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);
  const isAccessingDashboard = currentUrl.pathname === "/home";
  const isApiRequest = currentUrl.pathname.startsWith("/api");

  if (userId && isPublicRoute(req) && !isAccessingDashboard) {
    console.log(userId, "User is logged in and accessing a public route");
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!userId) {
    if (!isPublicApiRoute(req) && !isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    if (isApiRequest && !isPublicApiRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
