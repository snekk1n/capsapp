import { useState, useEffect } from 'react';

function CurrentTime({ svgColor = '#000' }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: svgColor,
        }}>
            {formatTime(time)}
        </div>
    );
}

export default CurrentTime;
