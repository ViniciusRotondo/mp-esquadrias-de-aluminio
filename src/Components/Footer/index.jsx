import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Facebook from '/facebook.svg';
import Instagram from '/instagram.svg';
import Logo from '/LogoCompleta.png';

const Footer = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={3} className='logo d-none d-md-block '> 
          <Image src={Logo} alt="logotipo" fluid className="align-self-center" />
        </Col>
        <Col md={6} className="contato"> 
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
            <img src={Instagram} alt="Imagem instagram" className='insta' />
          </div>
        </Col>
        <Col md={3} className="endereco"> 
          <h2>Onde estamos</h2>
          <p>Av. Brasil, 1580 - Parque das Laranjeiras, Itupeva - SP, 13295-152</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;