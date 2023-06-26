import Titulo from "cinetag/src/components/Titulo";
import styles from "./Player.module.css";
import Banner from "components/Banner";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../NaoEncontrada";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideos] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/monicahillman/cinetag-api/videos?id=${parametros.id}`
    )
      .then((respostas) => respostas.json())
      .then((dados) => {
        setVideos(...dados);
      });
  }, []);

  if (!video) {
    return <NaoEncontrada />;
  }

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
