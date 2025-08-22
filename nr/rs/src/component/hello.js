import React, { useEffect, useState } from 'react';

export default function Hello() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/hello')
            .then(response => response.text())
            .then(data => setMessage(data))
            .catch(error => setMessage('Error: ' + error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}
