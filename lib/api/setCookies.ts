import type { NextResponse } from 'next/server';

export const appendSetCookies = (response: NextResponse, setCookie: string[] | undefined) => {
  for (const cookie of setCookie ?? []) {
    response.headers.append('set-cookie', cookie);
  }
};
