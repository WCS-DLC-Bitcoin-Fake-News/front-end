import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./countdownStyles.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CountdownTimer({deadline}) {
  console.log(deadline)
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date(deadline).getTime() / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
      <div className="Countdown rounded-full shadow-sm nm-convex-white border border-yellowBunker text-gray-600 font-cabin">
        <CountdownCircleTimer
            {...timerProps}
            colors={[["#9FAEC0"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
        >
            {({ elapsedTime }) =>
            renderTime("days left", getTimeDays(daysDuration - elapsedTime))
            }
        </CountdownCircleTimer>
      </div>
  );
}
