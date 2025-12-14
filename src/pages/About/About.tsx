import styles from "./about.module.scss";
import { useBlurOut } from "../../hooks/blurEffect";
import { motion } from "framer-motion";

export default function Home() {
  const { ref, textColor } = useBlurOut();

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.intro}
        ref={ref}
        style={{ color: textColor }}
        transition={{ duration: 1.2 }}
      >
        <div className={styles.head} id={styles.introtekst}>
          I'm a graphic, motion and digital designer who makes websites, books,
          magazines, videos, scarfs, vinyl-covers, ... I'm 24 years old, have a
          master of graphic design (Luca School of Arts, Ghent) and study
          multimedia and creative technology.
        </div>
        <div className={styles.introImages}>
          <img className={styles.imgBlur} src="/Images/nina.png" alt="" />
          <img className={styles.nina} src="/Images/roosLarge.png" alt="Roos" />
          <img
            className={styles.imgBlur}
            src="/Images/masters3Small.png"
            alt="Nina"
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.contactgegevens}
        ref={ref}
        style={{ color: textColor }}
      >
        <h2>Let's get to know each other!</h2>
        <div className={styles.items}>
          <div className={styles.individual}>
            email address: <br />
            <a href="mailto:breedstraetnina@gmail.com">
              <img src="/Images/mailicon.png" alt="" className={styles.icons} />
            </a>
          </div>
          <div className={styles.individual}>
            personal instagram:
            <br />
            <a href="https://www.instagram.com/ninabreedstraet/">
              <img
                src="/Images/instagramicon.png"
                alt=""
                className={styles.icons}
              />
            </a>
          </div>
          <div className={styles.individual}>
            graphic design instagram: <br />
            <a href="https://www.instagram.com/n.breedstraet/">
              <img
                src="/Images/instagramicon.png"
                alt=""
                className={styles.icons}
              />
            </a>
          </div>
          <div className={styles.individual}>
            linked-in:
            <a href="https://be.linkedin.com/in/nina-breedstraet-895a88236">
              <img
                src="/Images/linkedinicon.png"
                alt=""
                className={styles.icons}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
