import React, { useState } from 'react';

export default function Input() {
    const [form, setForm] = useState({ id: '', pw: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:8080/api/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                alert('저장 성공!');
                setForm({ id: '', pw: '' });
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
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="아이디"
            />
            <input
                name="pw"
                type="password"
                value={form.pw}
                onChange={handleChange}
                placeholder="비밀번호"
            />
            <button type="submit">전송</button>
        </form>
    );
}