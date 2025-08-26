import React, { useState } from 'react';

export default function Input() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleIdChange = (e) => setId(e.target.value);
    const handlePwChange = (e) => setPw(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, pw }),
            });
            if (response.ok) {
                alert('저장 성공!');
                setId('');
                setPw('');
            } else {
                alert('저장 실패');
            }
        } catch (err) {
            alert('에러: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={id}
                onChange={handleIdChange}
                placeholder="아이디를 입력하세요"
            />
            <input
                type="password"
                value={pw}
                onChange={handlePwChange}
                placeholder="비밀번호를 입력하세요"
            />
            <button type="submit">전송</button>
        </form>
    );
}