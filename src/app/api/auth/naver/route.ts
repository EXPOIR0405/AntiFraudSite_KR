import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// POST 요청 처리
export async function POST(req: NextRequest) {
  const { code, state } = await req.json();

  try {
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const clientSecret = process.env.NAVER_CLIENT_SECRET;
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3007/callback';

    console.log('Requesting token with:', { clientId, redirectUri, code, state });

    const tokenResponse = await axios.get(
      `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&state=${state}&redirect_uri=${redirectUri}`
    );

    console.log('Token response:', tokenResponse.data);

    const { access_token } = tokenResponse.data;

    // 액세스 토큰이 성공적으로 받아졌다면, 해당 토큰을 클라이언트로 반환
    return NextResponse.json({ access_token });
  } catch (error) {
    console.error('네이버 토큰 요청 중 오류:', error);
    if (axios.isAxiosError(error)) {
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
    }
    return NextResponse.json({ message: '네이버 로그인 처리 중 오류 발생', error: error.message }, { status: 500 });
  }
}