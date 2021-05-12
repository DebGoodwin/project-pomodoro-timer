import React from "react";
import { minutesToDuration } from "../utils/duration";

function TimerControls({timerControlsHandler, time, disabled}) {
  
  // Increase or decrease the duration on the timer buttons
  return (
      <div className="row">   
      {/*FocusTime*/}
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(time[0])}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`decrease-focus`}
                onClick={() => timerControlsHandler('minus', 'focus')}
                disabled={disabled}

              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`increase-focus`}
                onClick={() => timerControlsHandler('plus', 'focus')}
                disabled={disabled}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
      </div> 

        {/*Break Time*/}
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(time[1])}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid={`decrease-break`}
                  onClick={() => timerControlsHandler('minus', 'break')}
                  disabled={disabled}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid={`increase-break`}
                  onClick={() => timerControlsHandler('plus', 'break')}
                  disabled={disabled}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TimerControls;