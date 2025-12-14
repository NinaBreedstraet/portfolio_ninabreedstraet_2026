import { motion } from "framer-motion";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { useBlurOut } from "../../hooks/blurEffect";
// import useArrowAnimation from "../../hooks/arrowAnimation";
import DropdownMenu from "../Menu/menu.tsx";
import { useState } from "react";
import useArrowAnimation from "../../hooks/arrowAnimation.tsx";

const Navigation = () => {
  const { ref, textColor } = useBlurOut();
  const { arrowRef, angle } = useArrowAnimation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <motion.div className={styles.links}>
        <Link to="/home" className={styles.head}>
          <motion.div ref={ref} style={{ color: textColor }}>
            Nina Breedstraet
          </motion.div>
        </Link>
      </motion.div>

      <motion.div className={styles.rechts} style={{ zIndex: 999 }} ref={ref}>
        <motion.img
          src="/Images/stars.png"
          style={{
            width: "4%",
            right: "16%",
            top: "30%",
            position: "absolute",
          }}
          ref={arrowRef}
          alt=""
          animate={{ rotate: angle }}
        ></motion.img>

        <Link to="/about">
          <motion.img
            src="/Images/user2.png"
            style={{
              width: "3%",
              right: "10%",
              top: "40%",
              position: "absolute",
              cursor: "pointer",
            }}
            alt=""
          ></motion.img>
        </Link>

        <motion.img
          src="/Images/pixelArrow.png"
          style={{
            width: "2%",
            right: "5%",
            position: "absolute",
            cursor: "pointer",
          }}
          ref={arrowRef}
          alt=""
          className={styles.img}
          animate={{ rotate: isOpen ? 180 : 0 }}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <DropdownMenu isVisible={isOpen} />
      </motion.div>
    </nav>
  );
};

export default Navigation;
