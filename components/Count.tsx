"use client";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

interface co {
  num: number;
  duration: number;
}

const Count: React.FC<co> = ({ num, duration }) => {
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleVisibilityChange = (isVisible: any, start: () => void) => {
    if (isVisible && !hasPlayed) {
      setHasPlayed(true);
      start();
    }
  };

  return (
    <>
      <CountUp end={num} duration={duration}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={(isVisible: any) =>
              handleVisibilityChange(isVisible, start)
            }
            delayedCall
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};

export default Count;
