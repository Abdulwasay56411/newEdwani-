import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Stats = () => {
  const stats = [
    { number: 12, label: "YEARS ESTABLISHED", suffix: "+" },
    { number: 24, label: "FIELD WORKERS", suffix: "+" },
    { number: 250, label: "COMPLETED PROJECTS", suffix: "+" },
    { number: 18, label: "OFFICE STAFF", suffix: "+" },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              targetNumber={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedStat = ({ targetNumber, label, suffix, delay }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    });

    // Number counting animation
    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const increment = targetNumber / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);
  }, [controls, targetNumber, delay]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2387C0] mb-3"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}
        {suffix}
      </motion.div>
      <div className="text-sm sm:text-base lg:text-lg font-semibold text-black uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
};

export default Stats;
