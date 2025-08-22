"use client"; // 클라이언트 컴포넌트로 설정 (필수)

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  // NestJS API 호출 함수
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/hello');
      const data = await response.text();
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.error('API 호출 실패:', error);
    }
  };

  // 컴포넌트가 마운트될 때 API 호출
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* NestJS에서 받은 메시지 표시 */}
        <div className="bg-blue-300 p-4 rounded">
          <h2>NestJS에서 받은 메시지:</h2>
          <p>{message || "로딩 중..."}</p>
        </div>
        
        {/* 기존 코드들... */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        {/* ...나머지 기존 코드... */}
      </main>
    </div>
  );
}