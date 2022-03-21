import React, { useState } from "react";
import './style.scss';
import Buscador from "./Buscador/Buscador";
import Filtros from "./Filtros/Filtros.jsx";
import Ordenador from "./Ordenador/Ordenador";
import Pratos from "./Itens/Pratos";
import Header from "../../componentes/Header/header";
import "../../styles/tema.scss"


function Cardapio (){

    const [busca, setBusca] = useState ("");
    const [filtro, setFiltro] = useState (null);
    const [ordenador, setOrdenador] = useState("")

        return(
            <main>
                 <section className="cardapio">
                    <h3 className="titulo">Cardapio</h3>
                    <Buscador
                    busca={busca}
                    setBusca={setBusca} />
                        <div className="cardapio__filtros">
                            <Filtros filtro={filtro} setFiltro={setFiltro} />
                            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                            <Pratos busca={busca} filtro={filtro} ordenador={ordenador} />                 
                        </div>
                </section>
            </main>
        )
}

export default Cardapio;