import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../componentes/Header/header'
import Menu from '../componentes/Menu/Menu'
import Cardapio from '../pages/Cardapio/Cardapio'
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/sobre'
import Footer from '../componentes/Footer/footer'
import NotFound from '../pages/NotFound/NotFound'
import Prato from '../pages/Prato/Prato'


export default function AppRauter(){

    return (
        <Router>
            <Menu />
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index path='/' element={<Home />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='prato/:id' element={<Prato />} />
                </Routes>
            <Footer />
        </Router>

    )
}