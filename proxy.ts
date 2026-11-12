import { NextResponse, type NextRequest } from 'next/server';
import { checkServerSession } from '@/lib/api/session';
import { appendSetCookies } from '@/lib/api/setCookies';

export async function proxy(request: NextRequest) {
  if (request.cookies.has('accessToken')) {
    return NextResponse.next();
  }

  if (request.cookies.has('refreshToken')) {
    try {
      const session = await checkServerSession(request.headers.get('cookie') ?? '');
      if (session.status === 200 && session.data.success) {
        const response = NextResponse.next();
        appendSetCookies(response, session.headers['set-cookie']);
        return response;
      }
    } catch {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/favorites/:path*'],
};
