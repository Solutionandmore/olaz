import { get } from '@vercel/edge-config';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  // Kiểm tra nếu đường dẫn là '/redirect'
  if (req.nextUrl.pathname === '/redirect') {
    // Lấy URL cấp quyền Zalo từ Edge Config
    const zaloOAuthUrl = await get('zaloOAuthUrl');
    if (zaloOAuthUrl) {
      // Redirect ngay tại Edge
      return NextResponse.redirect(zaloOAuthUrl);
    }
    // Nếu không tìm thấy key, có thể trả về lỗi hoặc xử lý mặc định
    return NextResponse.next();
  }
  return NextResponse.next();
}
