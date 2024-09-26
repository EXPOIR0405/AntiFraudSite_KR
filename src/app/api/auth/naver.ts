import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code, state } = JSON.parse(req.body);

    try {
      const clientId = 'YOUR_NAVER_CLIENT_ID';
      const clientSecret = 'YOUR_NAVER_CLIENT_SECRET';
      const redirectUri = 'http://localhost:3007/callback';  // 설정한 리다이렉트 URI

      // 네이버 API로 액세스 토큰 요청
      const tokenResponse = await axios.get(
        `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&state=${state}&redirect_uri=${redirectUri}`
      );

      const { access_token } = tokenResponse.data;

      // 액세스 토큰이 성공적으로 받아졌다면, 해당 토큰을 클라이언트로 반환하거나 세션에 저장
      res.status(200).json({ access_token });
    } catch (error) {
      console.error('네이버 토큰 요청 중 오류:', error);
      res.status(500).json({ message: '네이버 로그인 처리 중 오류 발생' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}