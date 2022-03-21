import React from "react";
import './style.scss'
import {CgSearch} from "react-icons/cg";

function Buscador ({busca, setBusca}){
    return (
        <div className="buscador">
        <input
        value={busca}
        placeholder="Buscar"
        onChange={ (ev) => setBusca(ev.target.value)}        
        />
        <CgSearch 
            size={20}
            color='#4C4D5E'
        />
        </div>

    )
}

export default Buscador;