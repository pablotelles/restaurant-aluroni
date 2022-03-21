import React from "react";
import "./style.scss"
import {ReactComponent as NotFoundImg} from "../../assets/notFound/not_found.svg"
import "../../styles/tema.scss"
import {useNavigate} from "react-router-dom"

function NotFound (){
    const navigate = useNavigate()

    return(
        <div className="container">
            <div className="voltar">
                <button onClick={() => navigate(-1)}>{'< voltar'}</button>
            </div>
            <NotFoundImg className="notFound__image" />
        </div>
    )
}

export default NotFound;