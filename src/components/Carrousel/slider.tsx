import { useEffect, useRef } from "react";
import styles from "./Slider.module.scss";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";

type SliderProps = {
  work: string[];
};

export const CarouselDefault = ({ work }: SliderProps) => {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const splideInstance = useRef<Splide | null>(null);

  useEffect(() => {
    if (!splideRef.current) return;

    // Vernietig oude instantie
    if (splideInstance.current) {
      splideInstance.current.destroy();
    }

    // Nieuwe instantie mounten
    const splide = new Splide(splideRef.current, {
      type: "loop",
      perPage: 1,
      focus: "center",
      autoplay: true,
      pagination: false,
      arrows: false,
    });

    splide.mount();
    splideInstance.current = splide;

    return () => {
      splideInstance.current?.destroy();
    };
  }, [work]);

  const handlePrev = () => splideInstance.current?.go("<");
  const handleNext = () => splideInstance.current?.go(">");

  return (
    <div ref={splideRef} className="splide">
      <div className={styles.splideWrapper}>
        <div className={styles.pijltjesContainer}>
          <button onClick={handlePrev} className={styles.splide__arrow}>
            <VscArrowSmallLeft />
          </button>
          <button onClick={handleNext} className={styles.splide__arrow}>
            <VscArrowSmallRight />
          </button>
        </div>

        <div className="splide__track">
          <ul className="splide__list">
            {work.map((item, index) => (
              <li key={index} className="splide__slide">
                <div className={styles.sprookjeDeelContainer}>
                  <div className={styles.imgSprookje}>
                    <img src={item} alt={`Slide ${index}`} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
