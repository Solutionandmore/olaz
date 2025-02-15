import { NextResponse } from 'next/server';

export function middleware(req) {
  if (req.nextUrl.pathname === '/redirect') {
    const zaloOAuthUrl = "https://oauth.zaloapp.com/v4/oa/permission?app_id=2660693949023071086&redirect_uri=https%3A%2F%2Folaz-phuoc-thien-les-projects.vercel.app%2Fapi%2FzaloCallback";
    return NextResponse.redirect(zaloOAuthUrl);
  }
  return NextResponse.next();
}
