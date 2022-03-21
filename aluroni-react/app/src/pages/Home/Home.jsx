import React from "react";
import "../../styles/tema.scss"
import cardapio from "../../data/data.json"
import "./style.scss"
import nossaCasa from "../../assets/Imagens/nossacasa/nossa_casa.png"
import {useNavigate} from "react-router-dom"

function Home (){
    let pratosRecomendados = [...cardapio].sort(() => 0.5 - Math.random()). splice(0,3)
    const navigate = useNavigate()
    
    function openItem(item){
        navigate( `/prato/${item.id}`, {state: {item}});
        console.log(navigate)

    }      
    
    return(
        <section>
             <h3 className="titulo">Recomendações da cozinha</h3>
            <div className="recomendados">   
                {pratosRecomendados.map((item, index) =>( 
                    <div className="recomendado" key={index} onClick={()=> openItem(item)}>              
                        <div className="recomendado__imagem">
                        <img src={item.photo} />
                        </div>
                        <button
                            className="recomendado__botao">Ver mais</button>
                    </div>
                ))}
            </div>
            <h3 className="titulo">Nossa casa</h3>
            <div className="nossaCasa">
                <img src={nossaCasa} alt="Casa do aluroni" />
                <div className="nossaCasa__endereco">
                    Rua vergueiro, 3185 <br/>Vila mariana, SP
                </div>
            </div>

        </section>
    )
}

export default Home;