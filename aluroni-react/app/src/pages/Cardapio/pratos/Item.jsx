import React from "react";
import './itens.scss'

function Item ({item}){
  
    return(  <div  className="item" key={item.id}>
                    <div className="item__imagem">
                        <img src={item.photo} alt={item.title} />
                    </div>
                    <div className="item__descricao">
                        <div className={"item__titulo"}>
                            <h2> {item.title} </h2>
                            <p> {item.description} </p>
                        </div>
                        <div className="item__tags">
                            <div className="item__tipo">{item.category.label}</div>
                            <div className="item__porcao">Porção: {item.size}gm</div>
                            <div className="item__qtdpessoas">Serve: {item.serving} pessoa{item.serving === 1 ? "" : "s" }</div>
                            <div className="item__valor">{item.price.toFixed(2)}</div>
                        </div>
                    </div>                    
                </div>
       
       
    )
}

export default Item;