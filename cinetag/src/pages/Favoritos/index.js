import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css"

function Favoritos() {
    return (
        <>
        <Banner imagem="favoritos"/>
        <Titulo>Meus Favoritos</Titulo>
        <section className={styles.container}>
            <Card></Card>
        </section>
        </>
    )
}

export default Favoritos;