'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const NaverCallbackPage = () => {
  const router = useRouter();
  const [message, setMessage] = useState('네이버 로그인 처리 중...');

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (code && state) {
        try {
          const response = await fetch('/api/auth/naver', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code, state }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Access Token:', data.access_token);
            setMessage('로그인 성공! 메인 페이지로 이동합니다...');
            setTimeout(() => router.push('/'), 2000);
          } else {
            const errorData = await response.json();
            console.error('네이버 로그인 실패:', errorData);
            setMessage(`네이버 로그인 실패: ${errorData.message}`);
            setTimeout(() => router.push('/login'), 2000);
          }
        } catch (error) {
          console.error('네이버 로그인 중 오류:', error);
          setMessage(`로그인 처리 중 오류 발생: ${error.message}`);
          setTimeout(() => router.push('/login'), 2000);
        }
      } else {
        setMessage('잘못된 요청입니다. code 또는 state가 없습니다.');
        setTimeout(() => router.push('/login'), 2000);
      }
    };

    handleCallback();
  }, [router]);

  return <div>{message}</div>;
};

export default NaverCallbackPage;