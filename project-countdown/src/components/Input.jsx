import React, { useState } from 'react';

const Input = (props) => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startTimer = () => {
        props.startCountdown({
            hours,
            minutes,
            seconds
        });
    };

    return (
        <div style={{ display: "inline-block", border: "3px solid red", borderRadius: "7px", margin: "11rem", padding: "3rem" }}>
            <h3 style={{textDecoration: "underline" }}>Countdown</h3>
            <div style={{ marginTop: "3rem" }} >
                <span style={{ background: "green", padding: "0.5rem", borderRadius: "5px" }}>Hours</span><br />
                <input style={{ marginBlock: "1rem" }}
                    type='number' value={hours} onChange={(e) => setHours(e.target.value)} />
            </div>
            <div>
                <span style={{ background: "lightblue", padding: "0.5rem", borderRadius: "5px" }}>Minutes</span><br />
                <input style={{ marginBlock: "1rem" }}
                    type='number' value={minutes} onChange={(e) => setMinutes(e.target.value)} />
            </div>
            <div>
                <span style={{ background: "orange", padding: "0.5rem", borderRadius: "5px" }}>Seconds</span><br />
                <input style={{ marginBlock: "1rem" }}
                    type='number' value={seconds} onChange={(e) => setSeconds(e.target.value)} />
            </div>
            <button style={{ marginBottom: "1rem", paddingInline: "3rem", background: "lightgray" }}
                onClick={startTimer}>Start</button>
        </div>
    );
}

export default Input;
