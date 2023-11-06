import { NextResponse, type NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export const middleware = async (req: NextRequest) => {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient({ req, res });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// If user is not logged in, redirect to login page
	if (!user && req.nextUrl.pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// If user is logged in, redirect to dashboard
	if (user && req.nextUrl.pathname === "/login") {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	// If use is logged in and is trying to acccess / redirect to dashboard and if user is not logged in and is trying to access / redirect to login
	if (
		(user && req.nextUrl.pathname === "/") ||
		(!user && req.nextUrl.pathname === "/")
	) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	return res;
};

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
