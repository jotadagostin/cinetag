import Titulo from "cinetag/src/components/Titulo";
import styles from "./Player.module.css";
import videos from "json/db.json";
import Banner from "components/Banner";
import { useParams } from "react-router-dom";

function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={video.link}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        </section>
    </>
  );
}

export default Player;