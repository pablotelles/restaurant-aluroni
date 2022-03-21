import React, { useEffect, useState } from "react";
import Cardapio from "../Cardapio";
import Item from "./Item";
import './itens.scss'
import data from "../../../data/data.json"



function Pratos ({busca, filtro, ordenador}){


    const [lista, setLista] = useState(data)

    function testaBusca (title){
      const regex = new RegExp(busca, "i");
      return regex.test(title);
    }
    function testaFiltro (label){
      if (filtro !== null) return filtro ==label;
      return true;

    }
    function ordenar(novaLista){
      switch(ordenador){
        case "porcao":
          return novaLista.sort((a, b) =>a.size > b.size ? 1 : -1)
        case "qtd_pessoas":
          return novaLista.sort((a, b) =>a.serving > b.serving ? 1 : -1)
        case "preco":
        return novaLista.sort((a, b) => a.price > b.price ? 1 : -1)
        default: return novaLista
      }
    }

    useEffect(() =>{
      const novaLista = data.filter(item => testaBusca(item.title) && testaFiltro(item.category.label))

      setLista(ordenar(novaLista))

    }, [busca, filtro, ordenador])

    return(
        <div className="itens">
          {lista.map(item => <Item key={item.id} item={item}/>)}            
        </div>
       
    )
}

export default Pratos;