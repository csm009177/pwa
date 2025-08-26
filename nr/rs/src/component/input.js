import React, { useState } from 'react';

export default function Input() {
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: value }),
            });
            if (response.ok) {
                alert('저장 성공!');
                setValue('');
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
                value={value}
                onChange={handleChange}
                placeholder="메시지를 입력하세요"
            />
            <button type="submit">전송</button>
        </form>
    );
}