import React from 'react';
import styles from './ImageModal.module.scss';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
  if (!isOpen || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/Images/cross.png" alt="close" />
        </button>
        {images.length > 1 && (
          <button className={styles.navButton + ' ' + styles.prevButton} onClick={handlePrev}>
            <img src="/Images/arrowLeft.png" alt="previous" />
          </button>
        )}
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className={styles.modalImage} />
        {images.length > 1 && (
          <button className={styles.navButton + ' ' + styles.nextButton} onClick={handleNext}>
            <img src="/Images/arrowRight.png" alt="next" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageModal;