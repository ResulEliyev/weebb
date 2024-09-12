import { useEffect, useState } from "react";
import Flex from "./Flex";
import "./timer.css";

const countDown_target = new Date("2024-09-20T16:30:00");
const getTimeLeft = () => {
  const totalTimeLeft = countDown_target - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

export default () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Flex className="content text-center" gap={20}>
      {Object.entries(timeLeft).map((el, key) => {
        const label= el[0]
        const value= el[1]
        return (
          <div className="box" key={key}>
            <div className="value">
              <span>{value}</span>
            </div>
            <span className="label">{label}</span>
          </div>
        );
      })}

      {/* <div className="box">
        <div className="value">
          <span>{timeLeft.minutes}</span>
        </div>
        <span className="label">minutes</span>
      </div>
      <div className="box">
        <div className="value">
          <span>{timeLeft.seconds}</span>
        </div>
        <span className="label">seconds</span>
      </div> */}
    </Flex>
  );
};
