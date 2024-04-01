import "./footer.css";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Container, Row, Col, Image } from "react-bootstrap";
import Facebook from "/facebook.svg";
import Instagram from "/instagram.svg";
import Logo from "/LogoCompleta.png";

const Footer = () => {
/*     const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["places"],
  });

  const mapOptions = {
    center: {
      lat: -23.167260,
      lng: -47.054356,
    },
    zoom: 20,
  };

  useEffect(() => {
    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        new Map(document.getElementById("map"), mapOptions);
      })
      .catch((e) => {

      });
  }, []);  */

  return (
    <Container fluid className="container">
      <Row className="align-items-start py-3">
        <Col md={2} className="d-none d-md-block py-5">
          <Image src={Logo} alt="logotipo" fluid className="align-self-start" />
        </Col>
        <Col md={{ span: 5, offset: 1 }} className="contato">
          <h3>Contato</h3>
          <p>comercial@mpesquadriadealuminio.com.br</p>
          <h5>Redes sociais:</h5>
          <div className="nossas-redes">
            <a
              target="_blank"
              href="https://www.facebook.com/mp.esquadriadealuminio.1"
            >
              <img src={Facebook} alt="Imagem facebook" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/mp_esquadrias_de_aluminio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <img src={Instagram} alt="Imagem instagram" className="insta" />
            </a>
          </div>
        </Col>
        <Col md={4} className="endereco">
          <h3>Onde estamos</h3>
          <p>
            Av. Brasil, 1580 - Parque das Laranjeiras, Itupeva - SP, 13295-152
          </p>
          {/* <div id="map" style={{ width: "100%", height: "400px" }}></div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
