import React from 'react';
import { Search, AlertTriangle, Info, Users, ChevronRight } from 'lucide-react';

const RefinedScamWatchHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/api/placeholder/50/50" alt="Logo" className="h-10 w-10" />
              <div className="text-2xl font-bold text-indigo-700">사기예방센터</div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-700">사기 유형</a>
              <a href="#" className="text-gray-600 hover:text-indigo-700">보호 방법</a>
              <a href="#" className="text-gray-600 hover:text-indigo-700">신고하기</a>
              <a href="#" className="text-gray-600 hover:text-indigo-700">리소스</a>
            </nav>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="검색" className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition duration-300">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">당신의 안전한 경제활동을 지원합니다</h1>
            <p className="text-xl mb-8">사기로부터 자신을 보호하는 방법을 배우고, 최신 사기 수법에 대해 알아보세요.</p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              자세히 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* Main features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 사기 판별 섹션 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-4 text-black">사기 여부 판별</h2>
              <p className="text-gray-600 mb-4">의심스러운 상황이 있나요? 우리의 AI 기반 도구로 사기 여부를 빠르게 확인하세요.</p>
              <a href="#" className="text-indigo-600 te font-semibold hover:underline flex items-center">
                사기 판별하기 <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* 사기 정보 섹션 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Info className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-2xl text-black font-semibold mb-4">사기 정보 센터</h2>
              <p className="text-gray-600 mb-4">다양한 사기 유형과 최신 수법에 대해 알아보고 자신을 보호하는 방법을 익히세요.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline flex items-center">
                정보 살펴보기 <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* 사기 피해자 지원 섹션 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h2 className="text-2xl text-black font-semibold mb-4">피해자 지원</h2>
              <p className="text-gray-600 mb-4">사기 피해를 입으셨나요? 전문가의 조언을 받고 다른 피해자들과 경험을 공유하세요.</p>
              <a href="#" className="text-indigo-600 font-semibold hover:underline flex items-center">
                지원 받기 <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 최신뉴스 */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">최신 사기 뉴스 및 경고</h2>
          <div className="grid grid-cols-1 text-black md:grid-cols-3 gap-8">
            {[
              "신종 피싱 사기 주의보: 백신 접종 사칭 문자 급증",
              "가상화폐 투자 사기로 인한 피해액 연간 1000억 원 돌파",
              "택배 사칭 스미싱, 명절 시즌 맞아 기승"
            ].map((title, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={`/api/placeholder/400/${200 + index * 50}`} alt="News thumbnail" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{title}</h3>
                  <a href="#" className="text-indigo-600 hover:underline flex items-center">
                    자세히 보기 <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">사기예방센터</h3>
              <p className="text-gray-400">안전한 경제활동을 위한 필수 정보를 제공합니다.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">사기 유형</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">보호 방법</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">신고하기</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">리소스</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">연락처</h3>
              <p className="text-gray-400">이메일: rkdalswjd0405@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">뉴스레터 구독</h3>
              <form className="flex">
                <input type="email" placeholder="이메일 주소" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-full hover:bg-indigo-700 transition duration-300">구독</button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2023 사기예방센터. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RefinedScamWatchHomepage;