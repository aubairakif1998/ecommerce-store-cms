import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ["/api/:id/checkout", "/api/:id/categories",
        "/api/:id/billboards/:path*",
        "/api/:id/products/:path*", "/api/:id/sizes/:path*", "/api/:id/colors/:path*", "/api/:id/categories/:path*"]
});

export const config = {

    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",],
};


