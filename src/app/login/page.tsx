'use client';

import React from 'react';

const LoginPage: React.FC = () => {
  // 네이버 로그인 요청 함수
  const handleNaverLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '';
    const redirectUri = encodeURIComponent(process.env.NEXT_PUBLIC_REDIRECT_URI || 'http://localhost:3007/callback');
    const state = 'random_state';  // CSRF 방지를 위한 상태 값 (임의로 설정 가능)

    // 네이버 로그인 URL로 리다이렉트
    const naverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
    window.location.href = naverLoginUrl;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>

        {/* 이메일 로그인 */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일 주소</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            로그인
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <span className="text-sm text-gray-500">또는</span>
        </div>

        {/* 네이버 로그인 버튼 */}
        <button
          onClick={handleNaverLogin}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          네이버 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;