import "./style.scss"
import { useParams} from "react-router-dom"
import { useNavigate} from "react-router-dom"
import cardapio from "../../data/data.json"
import NotFound from "../NotFound/NotFound"


function Prato (){
    const {id} = useParams();
    const navigate = useNavigate()
    const item = cardapio.find(item => item.id == Number(id));
    if (!item){
        return(<NotFound />)
    }

    return(       
        <>          
            <section className="container cantainer__prato">
                <button className="voltar" onClick={() => navigate(-1)}>{'< voltar'}</button>
                <div className="prato">
                    <div className="imagem">
                        <img src={item.photo} alt={item.title} />
                    </div>
                    <div className="conteudo">
                        <h1 className="">{item.title}</h1>
                        <p className="conteudo__descrição">{item.description}</p>
                        <div className="tags">
                            <div className={`${"tags__tipo"} tags__tipo__${item.category.label.toLowerCase()}`}>
                                <p>{item.category.label}</p>
                            </div>
                            <div className="tags__porcao">
                                {item.size}g
                            </div>
                            <div className="tags__qtdpessoas">
                            Serve {item.serving} pessoa{item.serving ==1 ? "" :"s"}  
                            </div>
                            <div className="tags__valor">
                                R${item.price.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Prato;