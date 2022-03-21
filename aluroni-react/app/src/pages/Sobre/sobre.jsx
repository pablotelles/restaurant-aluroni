import React from "react";
import "./style.scss"
import "../../styles/tema.scss"
import casa from "../../assets/Imagens/sobre/casa.png"
import massaUm from "../../assets/Imagens/sobre/massa1.png"
import massaDois from "../../assets/Imagens/sobre/massa2.png"

const imagens = [massaUm, massaDois]

function Sobre (){
    return (
        <section>
        <h3 className="titulo">Sobre</h3>
        <div className="sobreNos">
                <img src={casa} alt="Casa Alurone" />
                <div className="sobreNos__texto">
                    <p>
                    Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <br/>
                    <p>
                    Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <br/>
                    <p>
                    Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>          
            </div>
            <div className="imagens">
                        {imagens.map((img, index) =>(
                            <img src={img} alt="Imagem" key={index} className="imagens__imagem" />
                        ))}
            </div>
        </section>
    )
}

export default Sobre;