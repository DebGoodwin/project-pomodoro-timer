import React from "react";
import {secondsToDuration, minutesToDuration} from "../utils/duration";

function TimeDisplay({typeOfSession, play, pause, sessionTimes, timeInSession}) {
    if (!play) return null;

    const timeLeft = typeOfSession === 'focus' ? sessionTimes[0] : sessionTimes[1];
    const label = typeOfSession === 'focus' ? 'Focusing' : 'On Break';
    const sessionDuration = `${minutesToDuration(timeLeft)}`;
    const timeRemaining = secondsToDuration(timeLeft * 60 - timeInSession);

    const percentComplete = (timeInSession / (timeLeft * 60)) * 100;
    function timerPaused (pause) {
        if(pause) {
            return <h2>PAUSED</h2>;
        } else {
            return null;
        }
    }

    // Display the session and time remaining and the status bar
    return (
        <div>
            <div className="row mb-2">
                <div className="col">
                    <h2 data-testid="session-title">
                        {label} for {sessionDuration} minutes
                    </h2>
                    <p className="lead" data-testid="session-sub-title">
                        {timeRemaining} remaining
                    </p>
                </div>
            </div>
      
            {timerPaused}
           
            <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={percentComplete} 
                        style={{ width: `${percentComplete}%` }} 
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeDisplay;