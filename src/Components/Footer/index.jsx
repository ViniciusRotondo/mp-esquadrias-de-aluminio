import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Facebook from '/facebook.svg'
import Instagram from '/instagram.svg'
import Logo from '/LogoCompleta.png'
import './footer.css'

const Footer = () => {
    return(
        <div className="container-footer">
            <div className='logo'>
                <img src={Logo} alt="logotipo" />
            </div>
            <div className="contato">
                <h2>Contatos para orçamento</h2>
                <p>
                    (11)97409-4092
                </p>
                <p>
                    (11)99984-1727
                </p>
                <p>
                    email@mpesquadriadealuminio.com.br
                </p>
                <p>Redes sociais:</p>
                <div className='nossas-redes'>
                    <img src={Facebook} alt="Imagem facebook" />
                    <img src={Instagram} alt="Imagem facebook" className='insta'/>
                </div>
            </div>
            <div className="endereco">
                <h2>Onde estamos</h2>
                <p>Av. Brasil, 1580 - Parque das Laranjeiras, Itupeva - SP, 13295-152</p>
            </div>
        </div>
    )
}

export default Footer