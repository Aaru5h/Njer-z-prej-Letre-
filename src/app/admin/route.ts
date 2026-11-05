import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function adminDestination(): URL | null {
  const configured = process.env.WORDPRESS_ADMIN_URL;
  if (!configured) return null;

  try {
    const url = new URL(configured);
    const localDevelopment = process.env.NODE_ENV === "development"
      && url.protocol === "http:"
      && ["localhost", "127.0.0.1"].includes(url.hostname);

    if (
      (url.protocol !== "https:" && !localDevelopment)
      || !["/wp-admin", "/wp-admin/"].includes(url.pathname)
      || url.username
      || url.password
      || url.search
      || url.hash
    ) return null;

    url.pathname = "/wp-admin/";
    return url;
  } catch {
    return null;
  }
}

export function GET() {
  const destination = adminDestination();

  if (!destination) {
    return new NextResponse("The editorial dashboard is not configured yet.", {
      status: 503,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "private, no-store, max-age=0",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  const response = NextResponse.redirect(destination, { status: 302 });
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
