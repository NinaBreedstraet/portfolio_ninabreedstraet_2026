import styles from "./work.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

type workContentProps = {
  img: string[];
  content: string;
  id: string;
  video: string[];
};

function workElement({ img = [], content, id, video }: workContentProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={styles.element}>
      <div className={styles.imagesContainer}>
        <img src="/Images/kruisje.png" alt="" className={styles.kruisje} />
        {img.length > 0 &&
          img.filter(Boolean).map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className={`${styles.image} ${
                selectedImage === src ? styles.fullscreenImage : ""
              }`}
              id={id}
              initial={{ opacity: 0, scale: 0.8, y: 10, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                delay: index * 0.2,
              }}
              onClick={() => setSelectedImage(src)}
            />
          ))}

        {selectedImage && (
          <motion.div
            className={styles.shade}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          />
        )}

        {selectedImage && (
          <img
            src="/Images/kruisje2.png"
            className={`${styles.kruisje} ${styles.showKruisje}`}
            onClick={() => setSelectedImage(null)}
          />
        )}

        {video.length > 0 &&
          video.filter(Boolean).map((src, index) => (
            <motion.video
              key={index}
              src={src}
              className={styles.video}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              controls
              autoPlay
              muted
              loop
              style={{
                top: `${30 + Math.sin(index) * 20}%`,
                left: `${30 + Math.cos(index) * 20}%`,
                objectFit: "contain",
              }}
            />
          ))}
        <a onClick={() => setShowInfo(!showInfo)} className={styles.knopjeInfo}>
          <img className={styles.info} src="/Images/info.png" alt="info" />
        </a>
        {showInfo && (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <p>{content}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default workElement;
