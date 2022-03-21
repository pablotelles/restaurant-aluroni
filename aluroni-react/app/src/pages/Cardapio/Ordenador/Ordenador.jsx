import React, { useState } from "react";
import './style.scss'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"
import opcoes from "../../../data/daraOrdenadores.json"


function Ordenador ({ordenador, setOrdenador}) {
    const [aberto, setAberto] = useState(false)
    const nomeOrdenador = ordenador && opcoes.find(opcao=> opcao.value == ordenador)?.nome;

    return(
        <button className="ordenador" onClick={()=> setAberto(!aberto)}>
            <span>{nomeOrdenador || "Ordenar por"}</span>
            {aberto ?<MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20}/>}
            <div className={`${"ordenador__options"} ${aberto ? "ordenador__options--ativo" : ""}`}>
                {opcoes.map((opcao) =>{
                    return(
                        <div
                        className="ordenador__option"
                        key={opcao.value}
                        onClick={ () => setOrdenador(opcao.value)}
                        >
                            {opcao.nome}
                        </div>
                    )
                })}
            </div>
        </button>
    )
}
export default Ordenador

