import React from "react";
import classNames from "../utils/class-names";

function Controls({playPause, play, pause, stop}) {
    return (
     <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": pause,
                  "oi-media-pause": !pause,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stop}
              disabled={!play}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
     </div>
    )
}

export default Controls;