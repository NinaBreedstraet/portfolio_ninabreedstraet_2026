import styles from "./work.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import ImageModal from "../ImageModal/ImageModal";

type workContentProps = {
  img: string[];
  content: string;
  id: string;
  video: string[];
};

function workElement({ img = [], content, id, video }: workContentProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const images = img.filter(Boolean);

  return (
    <div className={styles.element}>
      <div className={styles.imagesContainer}>
        <img src="/Images/cross.png" alt="" className={styles.kruisje} />
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            className={styles.image}
            id={id}
            initial={{ opacity: 0, scale: 0.8, y: 10, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
            }}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}

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
        <ImageModal
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          images={images}
          currentIndex={selectedImageIndex ?? 0}
          onNavigate={setSelectedImageIndex}
        />
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
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default workElement;
