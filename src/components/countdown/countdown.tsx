'use client'
import { useEffect, useState } from 'react'
import styles from './countdown.module.css'

export default function Countdown(props: { timeEnd:  Date; width: number }) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 }); 

  function calculateTimeLeft() {
    const target = new Date(props.timeEnd)
    const diff = +target - +new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  useEffect(() => {
    setMounted(true);
    setMousePos({ x: Math.random() * 100, y: Math.random() * 100 });

    const timer = setInterval(() => {
      const target = new Date(props.timeEnd);
      const diff = +target - +new Date();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [props.timeEnd]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }

  if (!mounted) return null;

  return (
    <div
      className={styles.container}
      style={{ width: "100%", maxWidth: `${props.width}px`, height: `auto`, 
               ['--bg-x' as any]: `${mousePos.x}%`,
               ['--bg-y' as any]: `${mousePos.y}%` }}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.timer}>
        <span>{timeLeft.days}</span>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timer}>
        <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timer}>
        <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className={styles.label}>Minutes</span>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.timer}>
        <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  )
}
