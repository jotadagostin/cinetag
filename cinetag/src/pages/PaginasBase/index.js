import Cabecalho from "cinetag/src/components/Cabecalho";
import Container from "cinetag/src/components/Container";
import Rodape from "cinetag/src/components/Rodape";
import FavoritosProvider from "cinetag/src/contextos/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;