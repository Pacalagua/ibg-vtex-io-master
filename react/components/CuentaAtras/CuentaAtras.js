import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div>⏰ Quedan {timeLeft.hours} horas, {timeLeft.minutes} minutos y {timeLeft.seconds} segundos ⏰<br />⚡ ¡Para 24 horas de Rebajas! ⚡<br />👉 <a href="/tyc-promos" style={{color: 'white', textDecoration: 'none'}}>Conoce las TyC</a> 👈</div>
    </div>
  );
};

export const CuentaAtras = () => {
  const now = new Date();
  const targetDate = new Date('2024-01-19T23:59:59');
  const difference = targetDate - now;
  if (difference <= 0) {
    return (
      <div></div>
    );
  }
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};