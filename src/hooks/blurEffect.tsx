import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export const useBlurOut = (): {
  ref: React.RefObject<HTMLParagraphElement>;
  opacity: MotionValue<number>;
  blur: MotionValue<string>;
  textColor: MotionValue<string>;
} => {
  const ref = useRef<HTMLParagraphElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 0], [0, 1, 1, 0]);

  const blur = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["blur(0px)", "blur(0px)", "blur(5px)"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#000000ff", "#00ff00ff", "#ff6600ff"]
  );

  return { ref, opacity, blur, textColor };
};
