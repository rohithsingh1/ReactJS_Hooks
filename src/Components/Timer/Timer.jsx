/* components/CountDown.jsx */

import React, {useState, useEffect} from "react";

const CountdownTimer=() => {
    const [eventDate, setEventDate]=useState("");
    const [countdownStarted, setCountdownStarted]=useState(false);
    const [timeRemaining, setTimeRemaining]=useState(0);

    useEffect(() => {
        if (countdownStarted&&eventDate) {
            const countdownInterval=setInterval(() => {
                const currentTime=new Date().getTime();
                const eventTime=new Date(eventDate).getTime();
                let remainingTime=eventTime-currentTime;

                if (remainingTime<=0) {
                    remainingTime=0;
                    clearInterval(countdownInterval);
                    alert("Countdown complete!");
                }

                setTimeRemaining(remainingTime);
            }, 1000);

            return () => clearInterval(countdownInterval);
        }
    }, [countdownStarted, eventDate, timeRemaining]);

    const handleSetCountdown=() => {
        setCountdownStarted(true);
        localStorage.setItem("eventDate", eventDate);
    };

    const handleStopCountdown=() => {
        setCountdownStarted(false);
        setTimeRemaining(0);
    };

    const handleResetCountdown=() => {
        setCountdownStarted(false);
        setEventDate("");
        setTimeRemaining(0);
        localStorage.removeItem("eventDate");
    };

    const formatDate=(date) => {
        const options={month: "long", day: "numeric", year: "numeric"};
        return new Date(date).toLocaleDateString("en-US", options);
    };

    const formatTime=(time) => {
        const seconds=Math.floor((time/1000)%60);
        const minutes=Math.floor((time/(1000*60))%60);
        const hours=Math.floor((time/(1000*60*60))%24);
        const days=Math.floor(time/(1000*60*60*24));

        return (
            <div className="countdown-display">
                <div className="countdown-value">
                    {days.toString().padStart(2, "0")} <span>days</span>
                </div>
                <div className="countdown-value">
                    {hours.toString().padStart(2, "0")} <span> hours</span>
                </div>
                <div className="countdown-value">
                    {minutes.toString().padStart(2, "0")} <span>minutes</span>
                </div>
                <div className="countdown-value">
                    {seconds.toString().padStart(2, "0")} <span>seconds</span>
                </div>
            </div>
        );
    };

    return (
        <div className="countdown-timer-container">
            <p className="countdown-date">
                {countdownStarted&&formatDate(eventDate)}
            </p>

            {!countdownStarted? (
                <form className="countdown-form">

                    <label htmlFor="date-picker">Event Date</label>
                    <input
                        name="date-picker"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        onClick={(e) => (e.target.type="date")}
                    />
                    <button onClick={handleSetCountdown}>Start Countdown</button>
                </form>
            ):(
                <>
                    {formatTime(timeRemaining)}
                    <div className="control-buttons">
                        <button onClick={handleStopCountdown}>Stop</button>
                        <button onClick={handleResetCountdown}>Reset</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CountdownTimer;