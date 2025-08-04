"use client";
import { useEffect, useState } from "react";

type CountUpProps = {
  end: number;
  duration?: number; // ms
};

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(end); // default SSR value

  useEffect(() => {
    const increment = end / (duration / 16); // ~60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}
