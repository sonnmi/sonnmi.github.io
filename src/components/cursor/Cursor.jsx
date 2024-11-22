import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, transform, animate } from 'motion/react'

export const Cursor = ( { hover } ) => {
  const [isVisible, setIsVisible] = useState(false);
  const moonRef = useRef(null);
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  const smoothX = useSpring(xMotion, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(yMotion, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const position = document.querySelector('.header__container .moon').getBoundingClientRect()
    moonRef.current = {x: position.left, y: position.top};
    console.log(position)
    const updateMousePosition = (e) => {
      xMotion.set(e.clientX);
      yMotion.set(e.clientY);
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [xMotion, yMotion]);

  return (
    <motion.div
      className={`mouse__cursor ${hover? "hover" : ''}`}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }} 
      transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
    />
  );
};
