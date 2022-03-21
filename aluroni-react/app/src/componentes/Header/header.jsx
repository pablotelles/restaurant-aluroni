import React from "react";
import { Outlet } from "react-router-dom";
import "./style.scss"
import "../../styles/tema.scss"

function Header (){
    return (
        <>
        <header className="header">
            <div className="header__text">A casa do código e da massa</div>
        </header>
        <div className="container">
            <Outlet />
        </div>
        </>
    )
}

export default Header;