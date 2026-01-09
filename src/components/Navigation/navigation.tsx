import { motion } from "framer-motion";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { useBlurOut } from "../../hooks/blurEffect";
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
            width: "15%",
            top: "30%",
          }}
          ref={arrowRef}
          alt=""
          animate={{ rotate: angle }}
        ></motion.img>
        <a href="/about" className={styles.about}>
          <motion.img
            src="/Images/user2.png"
            style={{
              width: "13%",
              height: "auto",
              cursor: "pointer",
            }}
            alt=""
          ></motion.img>
        </a>
        <motion.img
          src="/Images/pixelArrow.png"
          style={{
            width: "8%",
            cursor: "pointer",
          }}
          ref={arrowRef}
          alt=""
          animate={{ rotate: isOpen ? 0 : 180 }}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <DropdownMenu isVisible={isOpen} />
      </motion.div>
    </nav>
  );
};

export default Navigation;
