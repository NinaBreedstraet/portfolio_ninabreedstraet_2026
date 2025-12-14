import styles from "./publications.module.scss";
import data from "../../dataWork.json";
import WorkElement from "../../components/Work/workComponent";
import { CarouselDefault } from "../../components/Carrousel/slider";

export default function Publications() {
  const filteredWork = data.filter((item) => {
    const matchesGenre = item.genre.toLowerCase() === "publications";
    return matchesGenre;
  });

  const hoofdenItems = data.filter(
    (item) => item.title.toLowerCase() === "hoofden"
  );
  const hoofdenImages = hoofdenItems
    .map((item) => item.img)
    .flat()
    .filter(Boolean);

  return (
    <div className="container">
      <div className={styles.workP}>
        {filteredWork
          .filter((item) => item.title.toLowerCase() !== "hoofden")
          .map((work, index) => (
            <WorkElement
              key={index}
              img={work.img || []}
              content={work.content}
              id={work.id}
              video={work.video || []}
            />
          ))}
        <div className={styles.carouselcontainer}>
          {hoofdenImages.length > 0 && <CarouselDefault work={hoofdenImages} />}
        </div>
      </div>
    </div>
  );
}
