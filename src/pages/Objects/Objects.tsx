import styles from "./objects.module.scss";
import data from "../../dataWork.json";
import WorkElement from "../../components/Work/workComponent";

export default function Objects() {
  const filteredWork = data.filter((item) => {
    const matchesGenre = item.genre.toLowerCase() === "objects";
    return matchesGenre;
  });

  return (
    <div className="container">
      <div className={styles.work}>
        {filteredWork.map((work, index) => (
          <WorkElement
            key={index}
            img={work.img || []}
            content={work.content}
            id={work.id}
            video={work.video || []}
          />
        ))}
      </div>
    </div>
  );
}
