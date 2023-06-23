import { useFavoritoContext } from "cinetag/src/contextos/Favoritos";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from "./Favoritos.module.css"

function Favoritos() {
    const { Favorito } = useFavoritoContext();
    return (
        <>
        <Banner imagem="favoritos"/>
        <Titulo>Meus Favoritos</Titulo>
        <section className={styles.container}>
            <Card>
                {Favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </Card>
        </section>
        </>
    )
}

export default Favoritos;