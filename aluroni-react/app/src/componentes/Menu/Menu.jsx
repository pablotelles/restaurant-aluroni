import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import './style.scss'

function Menu (){
    const rotas = [
            {
                label: "Início",
                to: "/"
            },
            {
                label: "Cardapio",
                to: "/cardapio"
            },
            {
                label: "Sobre",
                to: "/sobre"
            },

        ]
      return (
        <nav className="menu">
            <img src={logo} alt="Logo do Aluroni"  />
            <ul className="menu__list">
                {rotas.map((item, index) =>(
                    <li key={index} className="menu__link">
                        <Link to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>                    
        </nav>
    )
}

export default Menu;