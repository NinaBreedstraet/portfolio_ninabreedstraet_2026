import styles from "./styles.module.scss";
import data from "../../dataWork.json";
import WorkElement from "../../components/Work/workComponent";
import { CarouselDefault } from "../../components/Carrousel/slider";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";

export default function Home() {
  const hoofdenItems = data.filter(
    (item) => item.title.toLowerCase() === "hoofden"
  );
  const hoofdenImages = hoofdenItems
    .map((item) => item.img)
    .flat()
    .filter(Boolean);

  return (
    <div className="container">
      <Box className={styles.work}>
        <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={0}>
          {data
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
        </Masonry>

        <div className={styles.carouselcontainer}>
          {hoofdenImages.length > 0 && <CarouselDefault work={hoofdenImages} />}
        </div>
      </Box>
    </div>
  );
}
