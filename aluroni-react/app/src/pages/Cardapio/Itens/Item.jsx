import React from "react";
import './itens.scss'
import {useNavigate} from "react-router-dom"

function Item ({item}){
    const navigate = useNavigate()
  
    return(  
    
                <div  className="item" key={item.id} onClick={() =>navigate(`/prato/${item.id}`)} >
                    <div className="item__imagem">
                        <img src={item.photo} alt={item.title} />
                    </div>
                    <div className="item__descricao">
                        <div className={"item__titulo"}>
                            <h2> {item.title} </h2>
                            <p> {item.description} </p>
                        </div>
                        <div className="item__tags">
                            <div className={`${"item__tipo"}  item__tipo__${item.category.label.toLowerCase()}`}>{item.category.label}</div>
                            <div className="item__porcao">Porção: {item.size}gm</div>
                            <div className="item__qtdpessoas">Serve: {item.serving} pessoa{item.serving === 1 ? "" : "s" }</div>
                            <div className="item__valor">R${item.price.toFixed(2)}</div>
                        </div>
                    </div>                    
                </div>
       
       
    )
}

export default Item;