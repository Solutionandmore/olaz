export const config = {
  runtime: 'edge',
};

import { get } from '@vercel/edge-config';

export default async function handler(req) {
  // Lấy URL từ Edge Config
  const zaloOAuthUrl = await get('zaloOAuthUrl');
  return Response.redirect(zaloOAuthUrl, 302);
}
