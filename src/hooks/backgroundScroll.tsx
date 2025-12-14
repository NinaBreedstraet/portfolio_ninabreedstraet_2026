import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/navigation";

export default function ScrollBackground() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["#ffdaedff", "#fff700ff", "#ff0000", "#0000ff"]
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{ position: "absolute", width: "100.2%", margin: "-1%" }}
      >
        <motion.div
          style={{
            backgroundColor,
            minHeight: "300vh",
            width: "100%",
          }}
        >
          <Navigation />
          <Outlet />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
