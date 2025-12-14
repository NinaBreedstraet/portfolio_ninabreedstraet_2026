import styles from "./digital.module.scss";
import data from "../../dataWork.json";
import WorkElement from "../../components/Work/workComponent";

export default function Digital() {
  const filteredWork = data.filter((item) => {
    const matchesGenre = item.genre.toLowerCase() === "digital";
    return matchesGenre;
  });

  return (
    <div className="container">
      <div className={styles.workP}>
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
