import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#f8f9fa'
    }}>
      <header style={{
        background: '#343a40',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center'
      }}>
        메인 레이아웃 헤더
      </header>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
      <footer style={{
        background: '#343a40',
        color: '#fff',
        padding: '1rem',
        textAlign: 'center'
      }}>
        메인 레이아웃 푸터
      </footer>
    </div>
  );
}