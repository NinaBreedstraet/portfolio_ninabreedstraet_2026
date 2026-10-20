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
        <img className={styles.nina} src="/Images/roosLarge.png" alt="Roos" />

        <div className={styles.head} id={styles.introtekst}>
          Nina Breedstraet is a graphic designer working across motion, brand
          identity and digital design, with a distinct eye for the cultural
          field. Her work has found a home with names like Rosas & P.A.R.T.S.,
          STUK Leuven, Different Class and Botanique, where she builds visual
          stories that stick.
        </div>

        <div className={styles.introImages}>
          <img className={styles.imgBlur} src="/Images/nina.png" alt="" />
          <img
            className={styles.imgBlur}
            src="/Images/masters3Small.png"
            alt="Nina"
          />
        </div>

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
                <img
                  src="/Images/mailicon.png"
                  alt=""
                  className={styles.icons}
                />
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
      </motion.div>
    </div>
  );
}
