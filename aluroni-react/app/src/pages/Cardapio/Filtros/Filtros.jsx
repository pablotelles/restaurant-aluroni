import React from "react";
import './style.scss'
import filtros from "../../../data/dataFiltros.json"

export default function Filtros ({filtro, setFiltro}){



    function selecionarFiltro (opcao){
        if (filtro == opcao.label) return setFiltro(null)
            return setFiltro(opcao.label)
      }
      
    return(
        <div className="filtros">
            {filtros.map((opcao) => {
                return(
                    <button
                    className={`${"filtros__filtro"} ${filtro == opcao.label ? "filtros__filtro--ativo" : ""}`}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}>{opcao.label}</button>
                )
            })}
            
        </div>
        
    )
    
}