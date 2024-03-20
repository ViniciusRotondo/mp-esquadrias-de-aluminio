import './header.css'
import logoCompletaLat from '/LogoCompletaLat.png'
import React from 'react'

const Header = () => {
    return(
        <div className='container'>
            <img src={logoCompletaLat} alt="" />
            <ul className='list-header'>
                <li><a href='#'>Início</a></li>
                <li><a href='#'>Quem Somos</a></li>
                <li><a href='#'>Nossos Serviços</a></li>
                <li><a href='#'>Orçamento</a></li>
            </ul>
        </div>
    )
}

export default Header;