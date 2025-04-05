
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" }
  ];

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {timeUnits.map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg w-14 md:w-16 h-14 md:h-16 flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-primary">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs mt-1 text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
