import { useState, useEffect, useRef } from "react";

const useArrowAnimation = () => {
  const arrowRef = useRef<HTMLImageElement | null>(null);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!arrowRef.current) return;

      const rect = arrowRef.current.getBoundingClientRect();
      const arrowX = rect.left + rect.width / 2;
      const arrowY = rect.top + rect.height / 2;

      const dx = e.clientX - arrowX;
      const dy = e.clientY - arrowY;

      const radians = Math.atan2(dy, dx);
      const degrees = radians * (180 / Math.PI);
      setAngle(degrees);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { arrowRef, angle };
};

export default useArrowAnimation;
