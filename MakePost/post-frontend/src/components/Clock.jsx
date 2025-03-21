import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours() * 30 + time.getMinutes() / 2;
    const minutes = time.getMinutes() * 6;
    const seconds = time.getSeconds() * 6;

    return (
        <div className="container w-fit">
            <div className="clock">
                <div className="center"></div>
                <div className="hour" style={{ transform: `rotate(${hours}deg)` }}>
                    <div className="hr"></div>
                </div>
                <div className="minute" style={{ transform: `rotate(${minutes}deg)` }}>
                    <div className="min"></div>
                </div>
                <div className="second" style={{ transform: `rotate(${seconds}deg)` }}>
                    <div className="sec"></div>
                </div>
            </div>
        </div>
    );
};

export default Clock;
