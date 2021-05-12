import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerControls from "./TimerControls";
import Controls from "./Controls";
import TimeDisplay from "./TimeDisplay";




function Pomodoro() {

  // Set the initial default values
  const initialState = {
    focus: 25,
    break: 5,
    play: false,
    pause: true,
    typeOfSession: 'focus',
    timeInSession: 0,
  };

  // The current session - null where there is no session running
  const [session, setSession] = useState(initialState);

  // Allow the user to adjust the focus and break duration.
  function timerControlsHandler(plusMinus, sessionType) {
    const initialTime = session[sessionType];
    const maxRange = sessionType === 'focus' ? 60 : 15;
    const minRange = sessionType === 'focus' ? 5 : 1;
    const increment = sessionType === 'focus' ? 5 : 1;
    const adjustedTime = plusMinus === 'plus' ? Math.min(initialTime + increment, maxRange)
      : Math.max(initialTime - increment, minRange);
    setSession((session) => ({
      ...session,
      [sessionType]: adjustedTime,
    }));
  }

  function timer() {
    const {typeOfSession, timeInSession} = session;
    const timeRemaining = session[typeOfSession] * 60 - timeInSession;
    setSession((session) => ({
      ...session,
      timeInSession: session.timeInSession + 1
    }));
  }

  function nextSession() {
    new Audio('https://bigsoundbank.com/UPLOAD/mp3/1830.mp3').play();
    const switchSession = session.typeOfSession === 'focus' ? 'break' : 'focus';
    setSession((session) => ({
      ...session,
      typeOfSession: switchSession,
      timeInSession: 0,
    }));
  }

  // Call whenever play/pause is clicked
  function playPause() {
    if (!session.pause) {
      const { typeOfSession } = session;
    }
    setSession((session) => ({
      ...session,
      pause: !session.pause,
      play: true,
    }));
  }

  // Reset on stop
  function stop() {
    setSession((session) => ({
      ...initialState
    }));
  }

  function endSession() {
    return session.timeInSession === session[session.typeOfSession] * 60;
  }

  /**
   * Custom hook that invokes the callback function every second
   */
  useInterval(() => {
    if (endSession()) 
      nextSession();
    else 
      timer();
    },
    session.pause ? null : 1000
  );
  
  return (
    <div className="pomodoro">
      <TimerControls 
        timerControlsHandler={timerControlsHandler}
        disabled={session.play}
        time={[session.focus, session.break]}
      />

      <Controls 
        pause={session.pause}
        play={session.play}
        stop={stop}
        playPause={playPause}
      />

      <TimeDisplay 
        typeOfSession={session.typeOfSession}
        play={session.play}
        pause={session.pause}
        sessionTimes={[session.focus, session.break]}
        timeInSession={session.timeInSession}
      />        
    </div>
  );
}

export default Pomodoro;
