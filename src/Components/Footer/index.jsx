import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Facebook from '/facebook.svg';
import Instagram from '/instagram.svg';
import Logo from '/LogoCompleta.png';

const Footer = () => {
  return (
    <Container>
      <Row className="align-items-center py-3">
        <Col md={3} className='logo d-none d-md-block '> 
          <Image src={Logo} alt="logotipo" fluid className="align-self-center" />
        </Col>
        <Col md={6} className="contato"> 
          <h3>Contato</h3>
          <p>
            comercial@mpesquadriadealuminio.com.br
          </p>
          <h5>Redes sociais:</h5>
          <div className='nossas-redes'>
            <a target='blank' href='https://www.facebook.com/mp.esquadriadealuminio.1'>
              <img src={Facebook} alt="Imagem facebook" />
            </a>
            <a target='blank' href='https://www.instagram.com/mp_esquadrias_de_aluminio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
              <img src={Instagram} alt="Imagem instagram" className='insta' />
            </a>
          </div>
        </Col>
        <Col md={3} className="endereco py-3"> 
          <h3>Onde estamos</h3>
          <p>Av. Brasil, 1580 - Parque das Laranjeiras, Itupeva - SP, 13295-152</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;